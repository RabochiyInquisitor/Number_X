import React, { useEffect, useCallback } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, StatusBar, FlatList, Pressable, Animated, Easing } from 'react-native';
import { useState, useRef } from 'react';
import { Generate } from '../../algoritms/generate';
import { colors } from '@/constants/Colors';
import { Delete } from '@/assets/icons/delete';
import { GamePageStyle } from './GamePage.style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { StopWatch } from '@/assets/icons/stopwatch';

export const GamePage = ({route} : {route : any}) => {
    const [userInput, setUserInput] = useState("")
    const [isResultOutput, setResultOutput] = useState(false)
    
    const keyboard = [
        {id: "1", value: ["7", "4", "1", "0"]},
        {id: "2", value: ["8", "5", "2", "delete"]},
        {id: "3", value: ["9", "6", "3", "done"]},
    ]

    const [score, setScore] = useState(0)

    const theme = useSelector((state : RootState) => state.theme.theme)
    const level = useSelector((state : RootState) => state.level.level)
    const bestScore = useSelector((state : RootState) => state.score.bestScore)

    const [time, setTime] = useState(level == 'Easy' ? "05:00" : level == 'Middle' ? '03:00' : '02:00')
    let timeIntervalId : any;
    


    const [currentExample, setCurrentExample] = useState<any>(Generate(level))

    const getResult = () => {
        if(userInput == currentExample[0])
        {
            setUserInput('Правильно!')
            setScore(score + 1)
            setResultOutput(true)
            setTimeout(() => {
            setCurrentExample(Generate(level))
            setResultOutput(false)
            setUserInput("")
            }, 1500)
        }
        else {
            setCurrentExample(`Ответ: ${currentExample[0]}`)
            setUserInput('Неправильно!')
            setResultOutput(true)
            setTimeout(() => {
            setCurrentExample(Generate(level))
            setResultOutput(false)
            setUserInput("")
            }, 1500)
        }
    }
    const updateTimer = useCallback(() => {
        const [minutes, seconds] = time.split(':').map(Number);
        let newSeconds = seconds - 1;
        let newMinutes = minutes;

        if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes--;
        }

        const formattedTime = `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;

        setTime(formattedTime);
    }, [time]); // time в зависимости

    useEffect(() => {
        timeIntervalId = setInterval(updateTimer, 1000);

        return () => clearInterval(timeIntervalId);
    }, [updateTimer]);


    return (
        <View style={[GamePageStyle.main, {backgroundColor: colors[theme].bottomField}]}>
        {route.params.mode == "time" ? <View style={GamePageStyle.timeModal}></View> : null}
        <StatusBar backgroundColor={colors[theme].topField}/>
        <View style={[GamePageStyle.topField, {backgroundColor: colors[theme].topField}]}>
            {route.params.mode == "free" ? <View style={GamePageStyle.scoreView}>
                <Text style={GamePageStyle.Score}>Лучший счёт: {bestScore}</Text>
                <Text style={GamePageStyle.Score}>Счёт: {score}</Text>
            </View> : <View style={GamePageStyle.stopWatch}><StopWatch/><Text style={GamePageStyle.time}>{time}</Text></View>}
            <View style={GamePageStyle.exampleBlock}>
            <Text style={[GamePageStyle.exampleText, {color: colors[theme].text}]}>{typeof(currentExample[0]) !== 'string' ? currentExample[1] : currentExample}</Text>
            </View>
            <View style={GamePageStyle.userInputBlock}>
            <Text style={[GamePageStyle.userInputText, typeof(userInput[0]) !== 'string' ? {fontSize: 80} : {fontSize: 50}, {color: colors[theme].text}]}>{userInput}</Text>
            </View>
            </View>
            <View style={[GamePageStyle.bottomField, {backgroundColor: colors[theme].bottomField}]}>
                <FlatList
                    style={GamePageStyle.keyboard}
                    data={keyboard}
                    renderItem={({item}) => (
                        <View>
                        {item.value.map(element => (
                            <Pressable key={element} style={[{backgroundColor: colors[theme].button, marginTop: 20, justifyContent: "center", height: 70, width: 70, borderRadius: 50}, item.id == "1" ? {} : {marginLeft: 20}]} onPress={element == "delete" ? () => {!isResultOutput ? setUserInput(prev => prev.length > 0 ? prev.slice(0, -1) : prev) : null} : element == "done" ? () => {userInput != "" ? !isResultOutput ? getResult() : null : null} : () => {!isResultOutput ? setUserInput(prev => prev + element) : null}}>
                            {element == "delete" ? <View style={GamePageStyle.deleteButton}><Delete color={colors[theme].text}/></View> : element == "done" ? <Text style={[GamePageStyle.doneButton, {color: colors[theme].text}]}>=</Text> : <Text style={[GamePageStyle.ordinaryButtonText, {color: colors[theme].text}]}>{element}</Text>}
                            </Pressable>
                        ))}
                        </View>
                    )}
                    horizontal
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}