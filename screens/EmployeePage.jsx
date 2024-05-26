import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react'
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
import inputStuff from "../components/input";
import InputStuff from "../components/input";
import axios from 'axios';
import {useUserContext} from "../hooks/UserProvider";
import EmployeeStress from "../components/EmployeeStress";


const EmployeePage = ({navigation}) =>{
    const {user, logout} = useUserContext();
    const [employees, setEmployees] = useState([]);
    console.log(user)
    const handlePress =() =>{
        logout();
    }
    useEffect(() => {
        if(user) {
            async function fetchData() {
                try {
                    const response = await axios.post('http://139.59.156.48:5000/api/getAddedEmployees', {'userId': user.userId})
                    setEmployees(response.employees)
                    console.log(response.data)
                } catch (error) {
                    console.log("Error:", error)
                }
            }

            fetchData();
        }
    }, [user]);
return(
    <View style={styles.container}>
        <Icon style={styles.icon}></Icon>
        <TouchableOpacity style={styles.logoutButton} onPress={handlePress}><Text style={styles.logoutText}>Log out</Text></TouchableOpacity>
        <View style={styles.nameandButt}>
        <Text style={styles.middle_titleSU}>Hello, {user===undefined ? 'Guest' : user.firstName}</Text>
        <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText} onPress={()=> navigation.navigate("EmployeeAdd")}>Add an Employee</Text></TouchableOpacity>
        </View>
        <View style={styles.empContainer}>
            <EmployeeStress></EmployeeStress>

        </View>
    </View>
    )

}
const styles = StyleSheet.create({
    nameandButt:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "flex-end",
        width:'80%'


    },
    logoutButton:{
      marginTop:10,
        marginBottom:20,
        alignSelf:"flex-end",
        marginRight:40,
    },
    addButton:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#001F3D",
        backgroundColor: "#001F3D",
        marginLeft:24,
        width:100,
        height:70,
        padding:6

    },
    addButtonText:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 18,
    },
    logoutText:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16
    },
    errortext:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16
    },
    middle_titleSU:{
        fontSize: 32,
        marginBottom: '5%',
        color: COLORS.primary,
        fontFamily: "Roboto-Bold",
        fontWeight:"800",
        marginTop: 30,
        marginLeft: 24,
    },
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'flex-start',
        backgroundColor: COLORS.background,
        height:'100%',
        width:'100%',
        position: 'relative',
    },
    icon:{
        marginTop:80,
        marginRight:160,
    },
    empContainer:{
        width:'90%',
        height:'80%',
        display:"flex",
        flexDirection:"column",
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor:'#5F9EA0',
        marginHorizontal:"auto",
        marginTop: 20,
        borderRadius:4,
    }
})
export default EmployeePage;