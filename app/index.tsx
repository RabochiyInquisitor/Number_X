import React, { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GamePage } from './pages/GamePage/GamePage';
import { StartPage } from './pages/StartPage/StartPage';
import { Provider, useDispatch, useSelector, UseSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { colors } from '@/constants/Colors';
import { LeadersPage } from './pages/LeadersPage/LeadersPage';
import { Store, persistor, RootState } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Total } from '@/store/slices/global_slice';
import { setToken } from '@/store/slices/unic_token';
import { GeneratePersonalToken } from '@/core/algoritms/personal_token';

const Stack = createNativeStackNavigator();


const AppContent = () => {
  
  const currentTheme = useSelector((state : RootState) => state.theme.theme)
  const dispatcher = useDispatch()
  const token = useSelector((state : RootState) => state.token.token)
  /*useEffect(() => {
    dispatcher(Total.resetGlobalState())
  }, [])*/
  useEffect(() => {
    token ? dispatcher(setToken(GeneratePersonalToken())) : null
  }, [])
  return(
    <>
      <StatusBar backgroundColor={colors[currentTheme].topField}></StatusBar>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPage" component={StartPage} options={{animation: "slide_from_left"}}/>
        <Stack.Screen name="GamePage" component={GamePage} options={{animation: "slide_from_right"}}/>
        <Stack.Screen name="Leaders" component={LeadersPage} options={{animation: "slide_from_right"}}/>
      </Stack.Navigator> 
    </>
  )
}


export default function App({navigation} : any) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent/>
      </PersistGate>
    </Provider>
  );
}