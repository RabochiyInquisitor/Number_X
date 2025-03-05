import { View, Text, FlatList } from "react-native";
import { server } from "@/server/server";
import { useEffect, useState } from "react";
import { LeadersStyle } from "./LeadersPage.style";
import { colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Russia } from "@/assets/icons/flags/russia";
import { China } from "@/assets/icons/flags/china";

export const LeadersPage = ({route} : any) => {

    const [results, setResults] = useState([])
    const [filter, setFilter] = useState('bestHardTime')
    const theme = useSelector((state : RootState) => state.theme.theme)

    useEffect(() => {
        const fetchData = async () => {
            let data = await server.GetResults()
            console.log(data[0].bestHardTime.sort((a : any, b : any) => a.time.split(':').map(Number) - b.time.split(':').map(Number)))
            setResults(data)
        }
        fetchData()
    }, [])

    
    return (
        <View style={[LeadersStyle.main, {backgroundColor: colors[theme].bottomField}]}>
            <View style={[LeadersStyle.filter, {backgroundColor: colors[theme].topField}]}>
                <Text style={[LeadersStyle.text, {color: colors[theme].done}]}>Фильтр</Text>
            </View>
            {results &&  
                <FlatList
                    data={results}
                    renderItem={({item} : any) => (
                        <View style={[LeadersStyle.person, {backgroundColor: colors[theme].topField}]}>
                            <Text style={[LeadersStyle.text, {color: colors[theme].done}]}>{item.name}</Text>
                            {item.country == "Russia" ? <Russia/> : <China/>}
                        </View>
                    )}
                />
            }
        </View>
    );
}