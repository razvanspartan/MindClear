import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
import inputStuff from "../components/input";
import InputStuff from "../components/input";
const SignUp = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Icon style={styles.icon}></Icon>
            <Text style={styles.middle_titleSU}>Make an account</Text>
            <View style={styles.inputContainer}>
                <InputStuff name={"First name"} placeholder={"First name.."} type={'default'}></InputStuff>
                <InputStuff name={"Last name"} placeholder={"Last name.."} type={'default'}></InputStuff>
                <InputStuff name={"Email"} placeholder={"Email.."} type={'email-address'}></InputStuff>
                <InputStuff name={"Password"} placeholder={"Password.."} type={'password'}></InputStuff>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start your journey</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default SignUp;
