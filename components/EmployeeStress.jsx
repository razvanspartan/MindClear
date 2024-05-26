import { COLORS } from '../constants/colors';
import {StyleSheet, Text, View} from "react-native";
import StressLevelCard from "./stressLevelCard";

const EmployeeStress = ({firstName, lastName, stressLevels}) =>{

    return(
        <View>
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={4}/>
                <StressLevelCard stressLevel={9}/>
                <StressLevelCard stressLevel={0}/>
                <StressLevelCard stressLevel={1} isLast={1}/>
                <Text style={styles.text}>Lucian</Text>
            </View>
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={-1}/>
                <StressLevelCard stressLevel={9}/>
                <StressLevelCard stressLevel={-1}/>
                <StressLevelCard stressLevel={6} isLast={1}/>
                <Text style={styles.text}>Dinu</Text>
            </View>
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={7}/>
                <StressLevelCard stressLevel={-1}/>
                <StressLevelCard stressLevel={-1}/>
                <StressLevelCard stressLevel={6} isLast={1}/>
                <Text style={styles.text}>Marcel</Text>
            </View>
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={10}/>
                <StressLevelCard stressLevel={6}/>
                <StressLevelCard stressLevel={10}/>
                <StressLevelCard stressLevel={8} isLast={1}/>
                <Text style={styles.text}>Diana</Text>
            </View>
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
        marginBottom: '10%',
    },
    text:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16,
    }
})

export default EmployeeStress;