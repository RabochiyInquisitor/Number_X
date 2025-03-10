import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "@/constants/Colors";

const windowWidth = Dimensions.get('window').width


let duelButtonTextS = 18
let mainTextS = 16

if(windowWidth < 380)
{
    duelButtonTextS = 16
    mainTextS = 14
}

export const PersonInfoModalStyle = StyleSheet.create({
    modal: {
        height: Dimensions.get('window').height / 2, 
        width: Dimensions.get('window').width, 
        position: "absolute", 
        bottom: 0,
        zIndex: 100
    },
    cross: {
        alignSelf: "flex-end",
        marginRight: 10,
        marginTop: 10,
    },
    dossierHeader: {
        marginLeft: 10,
        fontSize: mainTextS,
        fontWeight: "bold"
    },
    dossierOrdinary: {
        marginLeft: 10,
        fontSize: mainTextS,
    },
    gameBlock: {
        marginTop: 20,
        
    },
    personBlock: {
        flexDirection: "row",
        alignItems: "center",
    },
    duelButton: {
        width: "70%",
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 50
    },
    duelButtonText: {
        textAlign: "center",
        fontSize: duelButtonTextS,
        fontWeight: "bold"
    }
})