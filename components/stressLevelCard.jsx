import { COLORS } from '../constants/colors';
import {StyleSheet, View} from "react-native";

const StressLevelCard=({stressLevel, isLast}) =>{
    const getColorForStressLevel = (stressLevel) => {
        if (stressLevel <= 2) return '#00FF00';
        if (stressLevel <= 4) return '#7FFF00';
        if (stressLevel <= 6) return '#FFFF00';
        if (stressLevel <= 8) return '#FF7F00';
        return '#8B0000';
    };

    return(
        <View style={[
            styles.card,
            { backgroundColor: getColorForStressLevel(stressLevel),
            shadowColor: getColorForStressLevel(stressLevel),
                shadowOpacity: isLast ? 1 : 0,
            }
        ]}
        ></View>

    )
}

const styles = StyleSheet.create({
    card:{
        width:'15%',
        height:15,
        borderRadius:10,
        shadowColor: '#00ff00',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
    }
})

export default StressLevelCard;