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

export const InfoModalStyle = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "center",
        backgroundColor: "black",
        opacity: 0.9,
        position: "absolute",
        zIndex: 100
    },
    nextButton: {
        width: 200,
        height: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 50
    },
    nextButtonText: {
        fontSize: nextButtonTextS,
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        color: "white",
        fontSize: mainTextS,
        fontWeight: "bold",
        textAlign: "center",
        width: "80%",
        alignSelf: "center",
        marginBottom: 50
    },
    dontShowAgain: {
        marginTop: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dontShowAgainText: {
        color: "white",
        fontSize: mainTextS,
        fontWeight: "bold"
    }
})