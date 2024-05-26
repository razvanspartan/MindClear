import { COLORS } from '../constants/colors';
import {StyleSheet, Text, View} from "react-native";
import StressLevelCard from "./stressLevelCard";

const EmployeeStress = ({firstName, lastName, stressLevels}) =>{

    return(
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={40}/>
                <StressLevelCard stressLevel={90}/>
                <StressLevelCard stressLevel={0}/>
                <StressLevelCard stressLevel={10} isLast={1}/>
                <Text style={styles.text}>Lucian</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    employeeStressCont:{
        backgroundColor:"#4E7E82",
        width:'90%',
        height:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        borderRadius:8,
    },
    text:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16,
    }
})

export default EmployeeStress;