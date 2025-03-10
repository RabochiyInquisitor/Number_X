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

export const FilterStyle = StyleSheet.create({
    modal: {
        height: Dimensions.get('window').height / 2, 
        width: Dimensions.get('window').width, 
        position: "absolute", 
        bottom: 0,
        zIndex: 100
    },
    ScoreFilterButton: {
        width: 200,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40
    },
    ScoreFilterText: {
        fontSize: mainTextS,
        textAlign: "center",
        fontWeight: "bold"
    },

})