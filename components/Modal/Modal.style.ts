import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "@/constants/Colors";

const windowWidth = Dimensions.get('window').width


let ScoreTextS = 14

if(windowWidth < 380)
{
    ScoreTextS = 12
}

export const ModalStyle = StyleSheet.create({
    modal: {
        height: Dimensions.get('window').height / 2, 
        width: Dimensions.get('window').width, 
        position: "absolute", 
        bottom: 0
    },
    themeSettingsBlock: {
        marginTop: 30,
        alignSelf: "center"
    },
    themeSettingBlockContent: {
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
    },
    SettingsText: {
        marginTop: 30,
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    blackThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: "black",
    },
    blackThemeIconText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#EEA441',
        textAlign: "center"
    },
    pinkThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: colors.sakura.topField,
    },
    pinkThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.sakura.done,
        textAlign: "center"
    },
    greyThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: colors.city.topField,
    },
    greyThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.city.done,
        textAlign: "center"
    },
    sandThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: colors.forest.topField,
    },
    sandThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.forest.done,
        textAlign: "center"
    },
    scoreView: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 15,
        width: 150,
        height: 100,
        paddingTop: 10
    },
    Score: {
        fontSize: ScoreTextS,
        fontWeight: "bold"
    },
    ///////// Levels
    easyThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: "#b2fba5",
    },
    easyThemeIconText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    middleThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: '#fce883',
    },
    middleThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    hardThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: '#A2231D',
    },
    hardThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    }
})