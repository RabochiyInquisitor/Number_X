import { View, Text, Dimensions, Animated, FlatList, Pressable } from "react-native";
import { colors } from "@/constants/Colors";
import { InfoModalStyle } from "./InfoModal.style";
import { useDispatch } from "react-redux";
import { Checkbox } from 'react-native-paper';
import { useState } from "react";
import { setTimeShowing, setFreeShowing } from "@/store/slices/showing";

export const InfoModal = ({type, setModalVisible} : {type: string, setModalVisible : any}) => {
    const dispatcher = useDispatch()
    const [checked, setChecked] = useState(false);
    return(
        <View style={InfoModalStyle.main}>
            {type == "time" && 
                <View>
                    <Text style={InfoModalStyle.text}>Это режим игры "На время". Здесь вы не будете видеть правильно или неправильно ли вы решили пример, однако в конце вы увидите кол-во набранных очков. По истичении времени, вы можете нажать на "=" чтобы начать игру заново.</Text>
                    <Text style={InfoModalStyle.text}>Соревнуйтесь с другими игроками! Чтобы посмотреть результаты соперников, перейдите во вкладку "лидеры" на главной странице</Text>
                </View>
            }
            {type == "free" && 
                <View>
                    <Text style={InfoModalStyle.text}>Это свободный режим игры. Время не ограничено, есть подсказки и индикаторы ответов. </Text>
                </View>
            }
            <Pressable style={InfoModalStyle.nextButton} onPress={() => setModalVisible(false)}>
                <Text style={InfoModalStyle.nextButtonText}>Продолжить</Text>
            </Pressable>
            <View style={InfoModalStyle.dontShowAgain}>
                <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                        setChecked(!checked)
                        type == "time" ? dispatcher(setTimeShowing(checked)) : dispatcher(setFreeShowing(checked))
                    }}
                    color="white"
                    uncheckedColor="white"
                />
                <Text style={InfoModalStyle.dontShowAgainText}>Не показывать больше</Text>
            </View>
        </View>
    )
}