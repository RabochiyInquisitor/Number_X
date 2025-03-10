import { View, Text, Dimensions, Animated, FlatList, Pressable, ScrollView } from "react-native";
import { colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { Cross } from "@/assets/icons/cross";
import { Lock } from "@/assets/icons/lock";
import { Message } from "@/utils/message";
import { FormStyle } from "./form.style";
import { TextInput } from "react-native-paper";
import axios from "axios";
import { server } from "@/server/server";
import { useEffect, useState } from "react";
import { GeneratePersonalToken } from "@/core/algoritms/personal_token";
import { setToken } from "@/store/slices/unic_token";

export const Form = ({closeFunction} : {closeFunction : any}) => {
    const theme = useSelector((state : RootState) => state.theme.theme)
    const [Name, setName] = useState('')
    const [Country, setCountry] = useState('')
    const token = useSelector((state : RootState) => state.token.token)
    const dispatcher = useDispatch()

    
    const personalData = {
        'name': Name,
        'country': Country,
        'bestEasyScore': useSelector((state : RootState) => state.global.global.score.Easy),
        'bestMiddleScore': useSelector((state : RootState) => state.global.global.score.Middle),
        'bestHardScore': useSelector((state : RootState) => state.global.global.score.Hard),
        "bestEasyTime": useSelector((state : RootState) => state.global.global.time.Easy),
        "bestMiddleTime": useSelector((state : RootState) => state.global.global.time.Middle),
        "bestHardTime": useSelector((state : RootState) => state.global.global.time.Hard),
        "token": token
    }

    return(
        <View style={FormStyle.globalField}>
            <View style={[FormStyle.main]}>
                <Pressable style={FormStyle.exit} onPress={() => closeFunction(false)}>
                    <Cross/>
                </Pressable>
                <Text style={[FormStyle.headerText]}>Имя:</Text>
                <TextInput style={FormStyle.nameInput} autoFocus={true} onChangeText={name => setName(name)}/>
                <Text style={[FormStyle.headerText]}>Страна:</Text>
                <TextInput style={FormStyle.countryInput} onChangeText={country => setCountry(country)}/>
                <Pressable style={[FormStyle.confirmButton]} onPress={(async () => {
                    await server.SendResults(personalData)
                    closeFunction(false)
                })}> 
                    <Text>Добавить</Text>
                </Pressable>
            </View>
        </View>
    )
}