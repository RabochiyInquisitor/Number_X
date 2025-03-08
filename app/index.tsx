import React, { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GamePage } from './pages/GamePage/GamePage';
import { StartPage } from './pages/StartPage/StartPage';
import { Provider, useDispatch, useSelector, UseSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { colors } from '@/constants/Colors';
import { LeadersPage } from './pages/LeadersPage/LeadersPage';
import { setLevel } from '@/store/slices/level.slice';
import { GetFromAsyncStorage } from '@/utils/AsyncStorage';
import { setTheme } from '@/store/slices/theme.slice';
import { setScore } from '@/store/slices/score.slice';
import { Store, persistor, RootState } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();


const AppContent = () => {
  
  const currentTheme = useSelector((state : RootState) => state.theme.theme)
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