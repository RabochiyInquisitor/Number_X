import { View, Text, Pressable, Dimensions, Easing, FlatList, Linking } from "react-native";
import { StartPageStyle } from "./StartPage.style";
import { useState, useRef } from "react";
import { Animated } from "react-native";
import { Gear } from "@/assets/icons/gear";
import { Modal } from "@/components/Modal/Modal";
import { colors } from "@/constants/Colors";
import { Lock } from "@/assets/icons/lock";
import { Cup } from "@/assets/icons/cup";
import { Help } from "@/assets/icons/help";
import { Message } from "@/utils/message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTimeShowing, setFreeShowing } from "@/store/slices/showing";

export const StartPage = (props : any) => {
    const theme = useSelector((state : RootState) => state.theme.theme)
    const translate_y = useRef(new Animated.Value(Dimensions.get('window').height / 2)).current
    const setting_press = useRef(new Animated.Value(0)).current
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatcher = useDispatch()
    
    const headerList = [
        {id: "1", item: "leaders"},
        {id: "2", item: "help"},
        {id: "3", item: "settings"}
    ]

    const degrees = setting_press.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const Appear = () => {
        Animated.timing(translate_y, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }
    const Desappear = () => {
        Animated.timing(translate_y, {
            toValue: Dimensions.get('window').height / 2,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    const AnimationSettingOpen = () => {
        Animated.timing(setting_press, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }
    const AnimationSettingClose = () => {
        Animated.timing(setting_press, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }
    return(
        <View style={[StartPageStyle.main, {backgroundColor: colors[theme].topField}]}>
            <View style={StartPageStyle.headerBlock}>
                <FlatList
                    style={StartPageStyle.header}
                    horizontal
                    contentContainerStyle={{justifyContent: "space-between", flexGrow: 1, alignItems: "center"}}
                    data={headerList}
                    renderItem={({item}) => (
                        item.item == "leaders" ? <Pressable onPress={() => props.navigation.navigate('Leaders')}><Cup theme={theme}/></Pressable> : item.item == "help" ? <Pressable onPress={() => {Linking.openURL('https://t.me/Cy_b_er_1')}}><Help theme={theme}/></Pressable> : <Animated.View style={[StartPageStyle.settings, {transform: [{rotateZ: degrees}]}]}>
                        <Pressable onPress={() => {
                            if(isModalOpen)
                            {
                                setModalOpen(false)
                                AnimationSettingClose()
                                Desappear()
                            }
                            else{ 
                                setModalOpen(true)
                                AnimationSettingOpen()
                                Appear()
                            }
                        }}>
                            <Gear theme={theme}/>
                        </Pressable>
                    </Animated.View>
                    )}
                />
            </View>
            <View style={StartPageStyle.logoBlock}> 
                <Text style={[StartPageStyle.logoText, {color: colors[theme].done}]}>Number X</Text>
            </View>
            <Pressable style={[StartPageStyle.gamePageButton, {backgroundColor: colors[theme].bottomField}]} onPress={() => props.navigation.navigate('GamePage', {mode: "time"})}>
                <Text style={[StartPageStyle.gamePageButtonText, {color: colors[theme].done}]}>На время</Text>
            </Pressable>
            <Pressable style={[StartPageStyle.gamePageButton, {backgroundColor: colors[theme].bottomField}]} onPress={() => props.navigation.navigate('GamePage', {mode: "free"})}>
                <Text style={[StartPageStyle.gamePageButtonText, {color: colors[theme].done}]}>Свободный</Text>
            </Pressable>
            <Pressable style={[StartPageStyle.gamePageButton, {backgroundColor: colors[theme].bottomField}, {position: "relative"}]} onPress={() => Message('Тут я ещё не закончил')}>
                <View style={{position: "absolute", alignSelf: "center"}}>
                    <Lock/>
                </View>
                <Text style={[StartPageStyle.gamePageButtonText, {color: colors[theme].done}]}>Дуэль</Text>
            </Pressable>
            <Modal transformValue={translate_y}/>
        </View>
    )
}