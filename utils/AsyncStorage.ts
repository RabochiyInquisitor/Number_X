import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoadToAsyncStorage = async (key : string, value : any) => {
    try
    {
        value = JSON.stringify(value)
    }
    catch
    {
        console.log("Sorry, it seems like value is not in JSON format")
    }
    try
    {
        await AsyncStorage.setItem(key, value)
    }
    catch(e)
    {
        console.log(e)
    }
}
export const GetFromAsyncStorage = async (key: string) : Promise<string | null>=> {
    try
    {
        const result = await AsyncStorage.getItem(key)
        return result
    }
    catch(e)
    {
        console.log(e)
        return null
    }
}

export const RemoveFromAsyncStorage = async (key : string) => {
    try
    {
        AsyncStorage.removeItem(key)
    }
    catch(e)
    {
        
    }
}