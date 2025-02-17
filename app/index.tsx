import React, { useEffect } from 'react';
import { ImageBackground, Text, View, Image, Dimensions, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native';
import * as Font from 'expo-font';
import { SettingsButton } from '@/components/SettingsButton/SettingButton';
import { Delete } from '@/assets/icons/delete';

const loadFonts = async (setFontsLoaded : any) => {
  await Font.loadAsync({
    'MyCustomFont': require('../assets/fonts/NicoMoji-Regular.ttf'),
    "SecondCustomFont": require("../assets/fonts/Jaini-Regular.ttf")
  });
  setFontsLoaded(true);
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    loadFonts(setFontsLoaded);
  }, []);

  const keyboard = [
    {text: "7", status: " "},
    {text: "8", status: " "},
    {text: "9", status: "last"},
    {text: "+", status: " "},
    {text: "4", status: " "},
    {text: "5", status: " "},
    {text: "6", status: "last"},
    {text: "-", status: " "},
    {text: "1", status: " "},
    {text: "2", status: " "},
    {text: "3", status: "last"},
    {text: "done", status: " "},
    {text: "0", status: " "},
    {text: ".", status: " "},
    {text: "delete", status: "last"},
    
  ]
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor='#000000e6'/>
      <Image source={require("@/assets/images/Main.png")} resizeMode='cover' style={{flex: 1, alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, position: "absolute"}}/>
      <SettingsButton/>
      <View>

      </View>
      <View style={{position: "absolute", top: 200}}>
        <View style={{flexDirection: "row", flexWrap: "wrap", width: 400, alignSelf: "center"}}>
          {keyboard.map(item => (
            <Pressable style={[{backgroundColor: "#302E2E", width: 70, height: 70, marginTop: 20, justifyContent: "center", borderRadius: 50, marginLeft: 20}, item.text == "done" ? {height: 165} : {height: 70}]}>
              {item.text != "delete" ? <Text style={{color: "white", textAlign: "center", textShadowRadius: 30, textShadowColor: "white", fontSize: 40, fontFamily: "MyCustomFont"}}>{item.text}</Text> : <View style={{alignSelf: "center", shadowColor: "white", shadowRadius: 30, shadowOpacity: 1, shadowOffset: {width: 0, height: 0}}}><Delete/></View>}
            </Pressable>
          ))}
          
        </View>
      </View>
    </SafeAreaView>
  );
}