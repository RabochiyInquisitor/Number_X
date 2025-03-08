import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "@/constants/Colors";

const windowWidth = Dimensions.get('window').width


let ScoreTextS = 14
let timeTextS = 16
let buttonWidth = 100
let buttonHeight = 70
let buttonTextS = 40
let exampleTextS = 60
let exampleHeight = 100
let userInputTextS = 80

if(windowWidth < 380)
{
    ScoreTextS = 12
    buttonHeight = 65
    buttonWidth = 95
    buttonTextS = 38
    timeTextS = 14
    exampleTextS = 50
    exampleHeight = 70
    userInputTextS = 70
}

export const GamePageStyle = StyleSheet.create({
    main: {
        flex: 1
    },
    topField: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height / 2,  
        borderBottomEndRadius: 30, 
        borderBottomStartRadius: 30
    },
    bottomField: {
        width: "100%", 
        height: Dimensions.get('window').height / 2
    },
    settings: {
        alignSelf: "flex-end", 
        marginRight: 20, 
        marginTop: 20, 
        position: "absolute", 
        right: 0
    },
    exampleBlock: {
        alignSelf: 'center', 
        height: exampleHeight, 
        marginTop: 100
    },
    exampleText: { 
        fontSize: exampleTextS, 
        textAlign: "center"
    },
    userInputBlock: {
        width: "100%", 
        marginTop: 110
    },
    userInputText: { 
        height: userInputTextS, 
        textAlign: "center"
    },
    keyboard: {
        alignSelf: "center"
    },
    cummonButton: {
        marginTop: 20, 
        justifyContent: "center", 
        height: buttonHeight, 
        width: buttonWidth, 
        borderRadius: 50
    },
    firstRange: {
        marginLeft: 20
    },
    deleteButton: {
        alignSelf: "center", 
        shadowColor: "white", 
        shadowRadius: 30, 
        shadowOpacity: 1
    },
    doneButton: {
        textAlign: "center",  
        fontSize: 40
    },
    ordinaryButtonText: {
       textAlign: "center", 
       fontSize: buttonTextS 
    },
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
        backgroundColor: "green",
    },
    easyThemeIconText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#EEA441',
        textAlign: "center"
    },
    middleThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: 'yellow',
    },
    middleThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.sakura.done,
        textAlign: "center"
    },
    hardThemeIcon: {
        justifyContent: "center",
        borderRadius: "100%",
        width: 70,
        height: 70,
        backgroundColor: 'red',
    },
    hardThemeIconText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.city.done,
        textAlign: "center"
    },
    timeModal: {
        flex: 1,
        position: "absolute",
        backgroundColor: "black",
        opacity: 0.2
    },
    stopWatch: {
        position: "absolute",
        marginTop: 20,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    time: {
        marginLeft: 10,
        fontSize: timeTextS,
        fontWeight: 'bold'
    }
})