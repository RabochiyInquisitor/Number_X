import { View, Text, Dimensions, Animated, FlatList, Pressable, ScrollView } from "react-native";
import { colors } from "@/constants/Colors";
import { FilterStyle } from "./Filter.style";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { setFilter } from "@/store/slices/filter";

export const Filter = ({transformValue} : {transformValue : any}) => {
    const dispatcher = useDispatch()
    const currentFilter = useSelector((state : RootState) => state.filter.filter)
    const theme = useSelector((state : RootState) => state.theme.theme)
    const ScoreFilter = [
        {id: "1", name: "Легко", english: "Easy", full: "bestEasyScore"},
        {id: "2", name: "Средне", english: "Middle", full: "bestMiddleScore"},
        {id: "3", name: "Сложно", english: "Hard", full: "bestHardScore"}
    ]
    const TimeFilter = [
        {id: "1", name: "Легко", english: "Easy", full: "bestEasyTime"},
        {id: "2", name: "Средне", english: "Middle", full: "bestMiddleTime"},
        {id: "3", name: "Сложно", english: "Hard", full: "bestHardTime"}
    ]
    const filters = [
        { title: "По лучшему счету на уровне", data: ScoreFilter },
        { title: "По лучшему времени на уровне", data: TimeFilter }
    ];
    return(
        <Animated.View style={[FilterStyle.modal, {transform: [{translateY: transformValue}]}, {backgroundColor: colors[theme].topField}]}>
            <FlatList
                data={filters}
                renderItem={({ item }) => (
                    <View>
                        <Text style={[FilterStyle.ScoreFilterText, { color: colors[theme].done, marginTop: 20 }]}>
                            {item.title}
                        </Text>
                        {item.data.map(scoreItem => (
                            <Pressable key={scoreItem.id} style={[FilterStyle.ScoreFilterButton, {backgroundColor: colors[theme].bottomField}, currentFilter == scoreItem.full ? {borderWidth: 1, borderColor: "blue"} : {}]} onPress={() => {
                                if(item.title == "По лучшему счету на уровне") 
                                {
                                    dispatcher(setFilter(scoreItem.full))
                                } 
                                else
                                {
                                    dispatcher(setFilter(scoreItem.full))
                                }
                            }}>
                                <Text style={[FilterStyle.ScoreFilterText, { color: colors[theme].done }]}>{scoreItem.name}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}
                keyExtractor={item => item.title}
                contentContainerStyle={{paddingBottom: 50}}
                showsVerticalScrollIndicator={false}
            />
        </Animated.View>
    )
}