import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
const LandingScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Icon style={styles.icon}></Icon>
            <Text style={styles.motto}>"Empowering Wellness, Together."</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.middle_title}>Get started</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}><Text style={styles.buttonText}>I am an Employer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>I am an Employee</Text></TouchableOpacity>
            </View>
            <Text style={styles.textBot}>Contact   |  ToS  |   Privacy</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textBot:{
        fontSize:12,
        marginTop:'80%',
        color: COLORS.primary,
    },
    motto:{
        marginTop:'3%',
        fontFamily:"Lato-Bold",
        color:COLORS.primary,
        fontWeight:"600",
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
        marginTop:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:"auto",
        height:"16%",
        alignItems:'center',
        gap:24,
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
        fontSize: 40,
        marginBottom: '5%',
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
        backgroundColor: "#004080",
        borderStyle: "solid",
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:260,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#004080",

    },
    buttonText:{
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16

    },
    icon:{
        marginTop:100
    }
});

export default LandingScreen;
