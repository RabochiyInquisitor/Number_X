import React, { useEffect, useCallback } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, StatusBar, FlatList, Pressable, Animated, Easing, BackHandler } from 'react-native';
import { useState, useRef } from 'react';
import { Generate } from '../../../core/algoritms/generate';
import { colors } from '@/constants/Colors';
import { Delete } from '@/assets/icons/delete';
import { GamePageStyle } from './GamePage.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { StopWatch } from '@/assets/icons/stopwatch';
import { indexes } from '@/constants/idnexes';
import { InfoModal } from '@/components/InfoModal/InfoModal';
import { setBestScore } from '@/store/slices/score.slice';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { Total } from '@/store/slices/global_slice';
export const GamePage = ({route} : {route : any}) => {
    
    type NavigationProps = {
        navigate: (screen: string) => void;
    };
    const keyboard = [
        {id: "1", value: ["7", "4", "1", "0"]},
        {id: "2", value: ["8", "5", "2", "delete"]},
        {id: "3", value: ["9", "6", "3", "done"]},
    ]
    const navigation = useNavigation<NavigationProps>();
    const [userInput, setUserInput] = useState("")
    const [isResultOutput, setResultOutput] = useState(false)
    const [score, setScore] = useState(0)
    const theme = useSelector((state : RootState) => state.theme.theme)  
    const level = useSelector((state : RootState) => state.level.level)
    const bestTime = useSelector((state : RootState) => state.global.global.time[level as 'Easy' | 'Middle' | 'Hard'])
    const [currentBestScore, changeCurrentBestScore] = useState(useSelector((state : RootState) => state.global.global.score[level as 'Easy' | 'Middle' | 'Hard']))
    const bestScore = useSelector((state : RootState) => state.global.global.score[level as 'Easy' | 'Middle' | 'Hard'])
    const dispatcher = useDispatch()
    const [isModalVisible, setModalVisible] = useState(useSelector((state : RootState) => route.params.mode == "time" ? state.show.time : state.show.free))
    const [time, setTime] = useState("00:00")
    let timeIntervalId : any;
    const [currentExample, setCurrentExample] = useState<any>(Generate(level))
    const [doneExamples, setDoneExamples] = useState(0)
    const maxExamples = level == "Easy" ? "50" : level == "Middle" ? "70" : "100"

    const getResult = () => {
        if(userInput == currentExample[0])
        {
            let operation : '+' | '-' = "+"

            if(route.params.mode != "time")
            {
                setUserInput('Правильно!')
                setResultOutput(true)
                setTimeout(() => {
                    setCurrentExample(Generate(level))
                    setResultOutput(false)
                    setUserInput("")
                }, 1500)
                setScore(score + Number((currentExample[1]
                    .split("")
                    .map((item : string) => {item == '-' || item == "+" ? operation = item : null; return Number(item); })
                    .filter((item : any) => !isNaN(item))
                    .reduce((accumulator: number, currentValue: number) => accumulator + currentValue) * indexes[operation]).toFixed(1)))
            }
            else
            {
                setCurrentExample(Generate(level)) 
                setUserInput("")
                setDoneExamples(doneExamples + 1)
            }
        }
        else {
            if(route.params.mode != 'time')
            {
                setCurrentExample(`Ответ: ${currentExample[0]}`)
                setUserInput('Не правильно!')
                setResultOutput(true)
                setTimeout(() => {
                    setCurrentExample(Generate(level))
                    setResultOutput(false)
                    setUserInput("")
                }, 1500)
            }
            else
            {
                setUserInput("")
                setCurrentExample(Generate(level))
            }
            
        }
    }
    const updateTimer = useCallback(() => {
        const [minutes, seconds] = time.split(':').map(Number);
        
    
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
    
        if (newSeconds > 59) {
            newSeconds = 0;
            newMinutes++;
        }
    
        
    
        const formattedTime = `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
        setTime(formattedTime);
    }, [time]);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if(route.params.mode == "time")
        {
            !isModalVisible ? timeIntervalId = setInterval(updateTimer, 1000) : null
    
            return () => clearInterval(timeIntervalId);
        }
    }, [updateTimer, isModalVisible]);
    useEffect(() => {
        if(doneExamples == Number(maxExamples) && route.params.mode == "time")
        {
            clearInterval(timeIntervalId);
            setCurrentExample("Победа!")
            setUserInput("")
            setResultOutput(true)
            console.log(Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]), Number(bestTime.split(':')[0]) * 60 + Number(bestTime.split(':')[1]))
            Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]) < Number(bestTime.split(':')[0]) * 60 + Number(bestTime.split(':')[1]) || bestTime == "00:00" ? dispatcher(Total.setGlobalScore({key: 'time', level: level as 'Easy' | 'Middle' | 'Hard', time: time})) : null
        }
    }, [time, doneExamples])
    useEffect(() => {
        if(score > bestScore)
        {
            dispatcher(Total.setGlobalScore({key: 'score', level: level as 'Easy' | 'Middle' | 'Hard', score: score}))
        }
    }, [score])
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <View style={[GamePageStyle.main, {backgroundColor: colors[theme].bottomField}]}>
            {isModalVisible && <InfoModal type={route.params.mode} setModalVisible={setModalVisible}/>}
            <StatusBar backgroundColor={colors[theme].topField}/>
            <View style={[GamePageStyle.topField, {backgroundColor: colors[theme].topField}]}>
                {route.params.mode == "time" && <View style={{position: "absolute", justifyContent: "center", height: 50, marginLeft: 10}}><Text>{`${doneExamples}/${maxExamples}`}</Text></View>}
                {route.params.mode == "time" && <View style={{position: "absolute", justifyContent: "center", height: 50, marginRight: 10, right: 0}}><Text>{bestTime}</Text></View>}
                {route.params.mode == "free" ? <View style={GamePageStyle.scoreView}>
                    <Text style={GamePageStyle.Score}>Лучший счёт: {currentBestScore}</Text>
                    <Text style={GamePageStyle.Score}>Счёт: {score}</Text>
                </View> : <View style={GamePageStyle.stopWatch}><StopWatch/><Text style={GamePageStyle.time}>{time}</Text></View>
                }
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
                            <Pressable key={element} style={[{backgroundColor: colors[theme].button}, GamePageStyle.cummonButton, item.id == "1" ? {} : {marginLeft: 20}]} onPress={element == "delete" ? () => {!isResultOutput ? setUserInput(prev => prev.length > 0 ? prev.slice(0, -1) : prev) : null} : element == "done" ? () => {
                                if(userInput != "" && !isResultOutput)
                                {
                                    getResult()
                                }
                                else if(route.params.mode == "time" && time == '00:00')
                                {
                                    setTime(level == 'Easy' ? "05:00" : level == 'Middle' ? '03:00' : '02:00')
                                    setUserInput("")
                                    setCurrentExample(Generate(level))
                                    setResultOutput(false)
                                    updateTimer()
                                }
                            } : () => {
                                !isResultOutput ? setUserInput(prev => prev + element) : null
                            }}>
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