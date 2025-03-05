import React, { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GamePage } from './pages/GamePage/GamePage';
import { StartPage } from './pages/StartPage/StartPage';
import { Provider, useDispatch, useSelector, UseSelector } from 'react-redux';
import { RootState, Store } from '@/store';
import { StatusBar } from 'react-native';
import { colors } from '@/constants/Colors';
import { LeadersPage } from './pages/LeadersPage/LeadersPage';
import { setLevel } from '@/store/slices/level.slice';
import { GetFromAsyncStorage } from '@/utils/AsyncStorage';
import { setTheme } from '@/store/slices/theme.slice';
import { setScore } from '@/store/slices/score.slice';

const Stack = createNativeStackNavigator();


const AppContent = () => {
  const dispatcher = useDispatch()
  useEffect(() => {   
    const loadData = async () => {
      const level = await GetFromAsyncStorage('level')
      const theme = await GetFromAsyncStorage('theme')
      const bestScore = await GetFromAsyncStorage('bestScore')

      console.log(level, theme, bestScore)
      
      dispatcher(setLevel(level === 'Easy' || level === 'Medium' || level === 'Hard' ? level : 'Easy'));
      dispatcher(setTheme(theme === 'sakura' || theme === 'city' || theme === 'forest' ? theme : 'sakura'));
      dispatcher(setScore(bestScore !== null ? parseInt(bestScore) : 0));
    }
    loadData()
  }, [])  
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPage" component={StartPage} options={{animation: "slide_from_left"}}/>
        <Stack.Screen name="GamePage" component={GamePage} options={{animation: "slide_from_right"}}/>
        <Stack.Screen name="Leaders" component={LeadersPage} options={{animation: "slide_from_right"}}/>
    </Stack.Navigator> 
  )
}


export default function App({navigation} : any) {
  return (
    <Provider store={Store}>
      <AppContent/>
    </Provider>
  );
}