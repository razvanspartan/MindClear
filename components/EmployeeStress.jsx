import { COLORS } from '../constants/colors';
import {StyleSheet, Text, View} from "react-native";
import StressLevelCard from "./stressLevelCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {useUserContext} from "../hooks/UserProvider";

const EmployeeStress = ({firstName, lastName, stressLevels}) =>{
    const {user} = useUserContext()
    const [stress, setStress] = useState(-1)
    useEffect(() => {
        async function fetchData(){
            if(user) {
                try {
                    const response = await axios.post('http://139.59.156.48:5000/api/getEmployeesStressLevel',  {'userid':user.userId})

                    setStress(response.data.stress)
                    console.log(response.data)
                } catch (error) {
                    console.log("Error:", error)
                }
            }
        }
        fetchData()
    }, [user]);
    return(
        <View>
            <View style={styles.employeeStressCont}>
                <StressLevelCard stressLevel={4}/>
                <StressLevelCard stressLevel={9}/>
                <StressLevelCard stressLevel={0}/>
                <StressLevelCard stressLevel={stress} isLast={1}/>
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