import { Gear } from "@/assets/icons/gear";
import { Pressable } from "react-native";

export const SettingsButton = () => {
    return(
        <Pressable style={{alignSelf: "flex-end", marginRight: 20, marginTop: 20}}>
            <Gear/>
        </Pressable>
    )
}