import { ToastAndroid } from "react-native"

export const Message = (text : string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}