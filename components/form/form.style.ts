import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "@/constants/Colors";

const windowWidth = Dimensions.get('window').width


let nextButtonTextS = 18
let mainTextS = 16

if(windowWidth < 380)
{
    nextButtonTextS = 16
    mainTextS = 14
}

export const FormStyle = StyleSheet.create({
    main: {
        width: 300,
        height: 300,
        alignSelf: "center",
        top: "20%",
        backgroundColor: "white",
        borderRadius: 20
    },
    globalField: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        zIndex: 100
    },  
    nameInput: {
        marginTop: 10,
        alignSelf: "center",
        width: "80%",
        borderColor: "blue",
        backgroundColor: "white"
    },
    countryInput: {
        marginTop: 10,
        alignSelf: "center",
        width: "80%",
        borderColor: "blue",
        backgroundColor: "white"
    },
    headerText: {
        marginTop: 10,
        fontSize: mainTextS,
        textAlign: "center",
        fontWeight: "bold"
    },
    confirmButton: {
        width: 100,
        height: 50,
        borderRadius: 50,
        borderColor: "purple",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 30
    },
    exit: {
        position: "absolute",
        right: 0,
        marginTop: 10,
        marginRight: 10,
        zIndex: 50
    }
})