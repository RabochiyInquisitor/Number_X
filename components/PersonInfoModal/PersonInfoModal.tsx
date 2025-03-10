import { View, Text, Dimensions, Animated, FlatList, Pressable, ScrollView } from "react-native";
import { colors } from "@/constants/Colors";
import { PersonInfoModalStyle } from "./PersonInfoModal.style";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { Cross } from "@/assets/icons/cross";
import { Lock } from "@/assets/icons/lock";
import { Message } from "@/utils/message";

export const PersonInfoModal = ({transformValue, person, closeFunction, changeState, changingValue} : {transformValue : any, person : any, closeFunction : any, changeState : any, changingValue : any}) => {
    const theme = useSelector((state : RootState) => state.theme.theme)
    return(
        <Animated.View style={[PersonInfoModalStyle.modal, {transform: [{translateY: transformValue}]}, {backgroundColor: colors[theme].topField}]}>
            <Pressable style={PersonInfoModalStyle.cross} onPress={() => 
            {
                closeFunction(changingValue)
                changeState(false)
            }}>
                <Cross/>
            </Pressable>

            <View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Имя: </Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.name : ""}</Text>
                </View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Страна:</Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}> {person ? person.country : ""}</Text>
                </View>
            </View>

            <View style={PersonInfoModalStyle.gameBlock}>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучший счёт на уровне "Легко":</Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestEasyScore : ""}</Text>
                </View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучший счёт на уровне "Средне": </Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestMiddleScore : ""}</Text>
                </View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучший счёт на уровне "Сложно":</Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestHardScore : ""}</Text>
                </View>
            </View>

            <View style={PersonInfoModalStyle.gameBlock}>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучшее время на уровне "Легко":</Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestEasyTime : ""}</Text>
                </View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучшее время на уровне "Средне": </Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestMiddleTime : ""}</Text>
                </View>
                <View style={PersonInfoModalStyle.personBlock}>
                    <Text style={[PersonInfoModalStyle.dossierHeader, {color: colors[theme].done}]}>Лучшее время на уровне "Сложно":</Text>
                    <Text style={[PersonInfoModalStyle.dossierOrdinary, {color: colors[theme].done}]}>{person ? person.bestHardTime : ""}</Text>
                </View>
            </View>
            <Pressable style={[PersonInfoModalStyle.duelButton, {backgroundColor: colors[theme].bottomField}]} onPress={() => Message('Тут я ещё не закончил')}>
                <View style={{position: "absolute", alignSelf: "center"}}>
                    <Lock/>
                </View>
                <Text style={[PersonInfoModalStyle.duelButtonText, {color: colors[theme].done}]}>Вызвать на дуэль</Text>
            </Pressable>
        </Animated.View>
    )
}