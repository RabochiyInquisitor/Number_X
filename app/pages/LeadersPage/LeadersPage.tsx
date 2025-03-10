import { View, Text, FlatList, Pressable, Animated, Dimensions, Easing, TouchableWithoutFeedback, Keyboard } from "react-native";
import { server } from "@/server/server";
import { useEffect, useState, useRef } from "react";
import { LeadersStyle } from "./LeadersPage.style";
import { colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Russia } from "@/assets/icons/flags/russia";
import { China } from "@/assets/icons/flags/china";
import { QuickSort } from "@/core/algoritms/quick_sort";
import { Filter } from "@/components/Filter/Filter";
import { PersonInfoModal } from "@/components/PersonInfoModal/PersonInfoModal";
import { Refresh } from "@/assets/icons/refresh";
import { Form } from "@/components/form/form";
import { GeneratePersonalToken } from "@/core/algoritms/personal_token";


interface ResultType {
    name: string,
    country: string,
    easy: number,
    middle: number,
    hard: number,
    bestEasyTime: string,
    bestMiddleTime: string,
    bestHardTime: string
    token: string
}

export const LeadersPage = ({route} : any) => {

    const [results, setResults] = useState<ResultType[]>([])
    const filter = useSelector((state : RootState) => state.filter.filter)
    const [loading, changeLoading] = useState(false)
    const [isFilterModalOpen, changeFilterModalOpen] = useState(false)
    const [isPersonModalOpen, changePersonModalOpen] = useState(false)
    const [isFormOpen, changeFormOpen] = useState(false)
    const theme = useSelector((state : RootState) => state.theme.theme)
    const translate_y_filter = useRef(new Animated.Value(Dimensions.get('window').height / 2)).current
    const translate_y_person = useRef(new Animated.Value(Dimensions.get('window').height / 2)).current
    const [currentPerson, setCurrentPerson] = useState()
    const personalToken = useSelector((state : RootState) => state.token.token)
    const [isAlreadyExist, setAlreadyExist] = useState(false)

    

    const fetchData = async () => {
        changeLoading(true)
        let data = await server.GetResults()
        const newResults = QuickSort(data, filter);
        setResults(newResults)
        changeLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        if(results)
        {
            const newResults = QuickSort(results, filter);
            setResults(newResults)
        }
    }, [filter])
    useEffect(() => {
        if(results)
        {
            for(let i = 0; i < results.length; i++)
            {
                if(personalToken == results[i].token)
                {
                    setAlreadyExist(true)
                }
            }
        }
    }, [results])

    const Appear = (translate_y : any) => {
        Animated.timing(translate_y, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }
    const Desappear = (translate_y : any) => {
        Animated.timing(translate_y, {
            toValue: Dimensions.get('window').height / 2,
            duration: 300,
            useNativeDriver: true
        }).start()
    }
    return (
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <View style={[LeadersStyle.main, {backgroundColor: colors[theme].bottomField}]}>
                <Pressable style={LeadersStyle.refresh} onPress={fetchData}>
                    <Refresh/>
                </Pressable>
                <Pressable style={[LeadersStyle.filter, {backgroundColor: colors[theme].topField}]} onPress={() => {
                    if(!isFilterModalOpen)
                    {
                        Appear(translate_y_filter)
                        changeFilterModalOpen(true)
                    }
                    else 
                    {
                        Desappear(translate_y_filter)
                        changeFilterModalOpen(false)
                    }
                }}>
                    <Text style={[LeadersStyle.text, {color: colors[theme].done, marginRight: 0}]}>Фильтр</Text>
                </Pressable>
                {!loading &&  
                    <FlatList
                        data={results}
                        renderItem={({item} : any) => (
                            <Pressable style={[LeadersStyle.person, {backgroundColor: colors[theme].topField}]} onPress={() => {
                                setCurrentPerson(item)
                                Appear(translate_y_person)
                                changePersonModalOpen(true)
                            }}>
                                <Text style={[LeadersStyle.text, {color: colors[theme].done}]}>{item.name}</Text>
                                {item.country == "Russia" ? <Russia/> : <China/>}
                            </Pressable>
                        
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                }
                {!isAlreadyExist && <Pressable style={[LeadersStyle.addMeButton, {backgroundColor: colors[theme].topField}]} onPress={async () => {
                        changeFormOpen(true)
                    }}>
                        <Text style={[LeadersStyle.text, {marginRight: 0, color: colors[theme].done}]}>Добавить себя</Text>
                    </Pressable>
                }
                <Filter transformValue={translate_y_filter}/>
                <PersonInfoModal transformValue={translate_y_person} person={currentPerson} closeFunction={Desappear} changeState={changePersonModalOpen} changingValue={translate_y_person}/>
                {isFormOpen && <Form closeFunction={changeFormOpen}/>}
            </View>
       </TouchableWithoutFeedback>
    );
}