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
        <Text style={styles.middle_titleSU}>Hello, {user===undefined ? 'Guest' : user.firstName}</Text>
        <TouchableOpacity style={styles.addButton}><Text>Add an Employee</Text></TouchableOpacity>
        <View style={styles.empContainer}>

        </View>
    </View>
    )

}
const styles = StyleSheet.create({
    logoutButton:{
      marginTop:16,
        alignSelf:"flex-end",
        marginRight:40,
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
        backgroundColor:'#5F9EA0',
        marginHorizontal:"auto",
    }
})
export default EmployeePage;