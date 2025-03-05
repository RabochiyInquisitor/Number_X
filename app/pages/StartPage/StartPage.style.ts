import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width


let logoTextS = 50

if(windowWidth < 380)
{
    logoTextS = 30
}

export const StartPageStyle = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",

    },
    gamePageButton: {
        alignSelf: "center",
        width: 200,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        marginBottom: 50,
        shadowOffset: {height: 50, width: 50},
        shadowColor: 'black',
        shadowOpacity: 1,
    },
    gamePageButtonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    logoBlock: {
        marginTop: 150,
        width: "100%",
        height: 100,
        marginBottom: 100
    },
    logoText: {
        fontSize: logoTextS,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        opacity: 0.3
    },
    settings: {
        
    },
    header: {
        position: "absolute",
        marginTop: 20,
        flex: 1
    },
    headerBlock: {
        width: "90%",
        alignSelf: 'center'
    }
})