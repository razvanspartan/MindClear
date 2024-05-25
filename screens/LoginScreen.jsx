import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
const LoginScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Heart style={styles.heart}/>
            <Text style={styles.heart_logo_text}>MindClear</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.middle_title}>Get started</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start your journey</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
      marginTop:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:"auto",
        height:"16%",
        alignItems:'center'
    },
    heart:{
        position: 'absolute',
        top: '5%',
        left: '7%',
        width: '30%',
        height: '20%',
    },
    heart_logo_text:{
        position: 'absolute',
        top: '9%',
        left: '14%',
        fontSize: 35,
        color: COLORS.primary,
    },
    middle_title:{
        fontSize: 25,
        color: COLORS.primary,
        fontFamily: "Roboto-Bold",
        fontWeight:"800",
    },
    input_field:{
        width: '70%',
        height: '5%',
        minHeight:'50px',
        padding: '3%',
        borderRadius: 10,
    },
    button:{
        backgroundColor: "#004080",
        borderStyle: "solid",
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:260,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#800000",
    },
    buttonText:{
      fontFamily: "Lato-Regular",

    },
});

export default LoginScreen;
