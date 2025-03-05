import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width


let nameTextS = 16

if(windowWidth < 380)
{
    nameTextS = 14
}

export const LeadersStyle = StyleSheet.create({
    main: {
        flex: 1
    },
    person: {
        width: "90%",
        height: 50,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    },
    text: {
        fontSize: nameTextS,
        fontWeight: "600"
    },
    personList: {
        alignSelf: "center",
        flex: 1
    },
    filter: {
        width: 150,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        alignSelf: "center"
    }
})