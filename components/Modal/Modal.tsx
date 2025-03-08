import { View, Text, Dimensions, Animated, FlatList, Pressable } from "react-native";
import { colors } from "@/constants/Colors";
import { ModalStyle } from "./Modal.style";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/slices/theme.slice";
import { UseSelector } from "react-redux";
import { setLevel } from "@/store/slices/level.slice";
import { RootState } from "@/store";

export const Modal = ({transformValue, theme} : {transformValue : any, theme : 'sakura' | 'forest' | 'city'}) => {
    const dispatcher = useDispatch()
    const level = useSelector((state : RootState) => state.level.level)
   
    const themesList = [
        {id: '1', theme: 'sakura'},
        {id: '2', theme: 'city'},
        {id: '3', theme: 'forest'}
    ]
    const levelsList = [
        {id: '1', level: 'Easy'},
        {id: '2', level: 'Middle'},
        {id: '3', level: 'Hard'}
    ]
    const toogleTheme = (theme : 'sakura' | 'city' | 'forest') => {
        dispatcher(setTheme(theme))
    }
    return(
        <Animated.View style={[ModalStyle.modal, {transform: [{translateY: transformValue}]}, {backgroundColor: colors[theme].bottomField}]}>
            <View>
                <Text style={ModalStyle.SettingsText}>Темы</Text>
                <FlatList
                    style={ModalStyle.themeSettingsBlock}
                    contentContainerStyle={ModalStyle.themeSettingBlockContent}
                    data={themesList}
                    renderItem={({item}) => (
                        <Pressable style={[item.theme == 'sakura' ? ModalStyle.pinkThemeIcon : item.theme == 'city' ? ModalStyle.greyThemeIcon : ModalStyle.sandThemeIcon, item.theme == theme ? {borderWidth: 1, borderColor: "blue"} : {}]} onPress={() => {
                        toogleTheme(item.theme as 'sakura' | 'city' | 'forest')
                        }}>
                        <Text style={item.theme == 'sakura' ? ModalStyle.pinkThemeIconText : item.theme == 'city' ? ModalStyle.greyThemeIconText : ModalStyle.sandThemeIconText}>{item.theme}</Text>
                        </Pressable>
                    )}
                    horizontal
                />
            </View>
            <View>
                <Text style={ModalStyle.SettingsText}>Сложность</Text>
                <FlatList
                style={ModalStyle.themeSettingsBlock}
                contentContainerStyle={ModalStyle.themeSettingBlockContent}
                data={levelsList}
                renderItem={({item}) => (
                    <Pressable style={[item.level == 'Easy' ? ModalStyle.easyThemeIcon : item.level == 'Middle' ? ModalStyle.middleThemeIcon : ModalStyle.hardThemeIcon, item.level == level ? {borderWidth: 1, borderColor: "blue"} : {}]} onPress={() => {
                        dispatcher(setLevel(item.level))
                    }}>
                    <Text style={item.level == 'Easy' ? ModalStyle.easyThemeIconText : item.level == 'Middle' ? ModalStyle.middleThemeIconText : ModalStyle.hardThemeIconText}>{item.level}</Text>
                    </Pressable>
                )}
                horizontal
                />
            </View>
        </Animated.View>
    )
}