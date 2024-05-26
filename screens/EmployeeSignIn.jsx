import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import React, {useState} from 'react'
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
import inputStuff from "../components/input";
import InputStuff from "../components/input";
import axios from 'axios';
import {useUserContext} from "../hooks/UserProvider";
const EmployeeSignIn = ({navigation}) => {
    const [code, setCode] = useState('');
    const [error, setError] =useState('')
    const [showError, setShowError] = useState(false)
    const { login } = useUserContext();
    const handleSignIn = async () =>{
        try{

            const response = await axios.post('http://139.59.156.48:5000/api/EmployeeCode', {
                'Employeecode': code,
            });
            console.log('Response:', response.data);
            if(response.data.code === 0){
                login(response.data)
                navigation.replace("Chat")
            }


        }catch(erroraxios){
            setError(erroraxios);
            setShowError(true)
            console.error('Error:', error)
        }
    }
    return(
        <View style={styles.container}>
            <Icon style={styles.icon}></Icon>
            <Text style={styles.middle_titleSU}>Get into your employee account</Text>
            <View style={styles.inputContainer}>
                <InputStuff name={"Code"} placeholder={"Code.."} type={'default'} value={code} onChangeText={setCode}></InputStuff>
                { showError && (<Text style={styles.errortext}>{error}</Text>)}
                <TouchableOpacity style={styles.button} onPress={handleSignIn}><Text style={styles.buttonText}>Start your journey</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 70,
    },
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        height:'100%',
        width:'100%',
        position: 'relative',
    },
    inputContainer:{
        marginTop:'10%',
        display:'flex',
        flexDirection:'column',
        width:"100%",
        height:"50%",
        alignItems:'center',
        gap:20,
    },
    icon:{
        marginTop:80,
        marginRight:160,
    },
    middle_title:{
        fontSize: 25,
        color: COLORS.primary,
        fontFamily: "Roboto-Bold",
        fontWeight:"800"
    },
    input_field:{
        backgroundColor: COLORS.primary,
        width: '70%',
        height: '5%',
        minHeight:'50px',
        padding: '3%',
        borderRadius: 10,
    },
    button:{
        backgroundColor: "#001F3D",
        borderStyle: "solid",
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:260,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#001F3D",
        marginTop: 40,
    },
    buttonText:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16

    },
});

export default EmployeeSignIn;
