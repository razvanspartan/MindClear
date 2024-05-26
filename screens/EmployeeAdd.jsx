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
const EmployeeAdd = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [DoB, setDoB]=useState('')
    const [MoB, setMoB]=useState('')
    const [YoB, setYoB]=useState('')

    const handleSignUp = async () =>{
        console.log(email)
        try{

            const response = await axios.post('http://139.59.156.48:5000/api/createUserCode', {
                'company':company,
                'firstName':firstName,
                'lastName': lastName,
                'email':email,
                'dayOfBirth':DoB,
                'monthOfBirth':MoB,
                'yearOfBirth':YoB

            });
            console.log('Response:', response.data);
            if(response.data.code=== 0){
                navigation.navigate("SignIn");
            }

        }catch(erroraxios){
            console.error('Error:', erroraxios)
        }
    }
    return(
        <View style={styles.container}>
            <Icon style={styles.icon}></Icon>
            <Text style={styles.middle_titleSU}>Make an account</Text>
            <View style={styles.inputContainer}>
                <InputStuff name={"First name"} placeholder={"First name.."} type={'default'} value={firstName} onChangeText={setFirstName}></InputStuff>
                <InputStuff name={"Last name"} placeholder={"Last name.."} type={'default'} value={lastName} onChangeText={setLastName}></InputStuff>
                <InputStuff name={"Email"} placeholder={"Email.."} type={'email-address'} value={email} onChangeText={setEmail}></InputStuff>
                <InputStuff name={"Password"} placeholder={"Password.."} type={'password'} value={password} onChangeText={setPassword}></InputStuff>
                <InputStuff name={"DoB"} placeholder={"day of birth"} type={'default'} value={DoB} onChangeText={setDoB}></InputStuff>
                <InputStuff name={"Last name"} placeholder={"month of birth"} type={'default'} value={MoB} onChangeText={setMoB}></InputStuff>
                <InputStuff name={"Email"} placeholder={"year of birth"} type={'default'} value={YoB} onChangeText={setYoB}></InputStuff>
                <InputStuff name={"Company name"} placeholder={"Company name.."} type={'default'} value={company} onChangeText={setCompany}></InputStuff>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}><Text style={styles.buttonText}>Start your journey</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}><Text style={styles.buttonText}>or sign in</Text></TouchableOpacity>
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

export default EmployeeAdd;
