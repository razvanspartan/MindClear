import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";

const LoginScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Heart style={styles.heart}/>
            <Text style={styles.heart_logo_text}>MindClear</Text>

            <Text style={styles.middle_title}>Get started</Text>
            <TextInput style={styles.input_field}>Insert your email</TextInput>
            <TouchableOpacity style={styles.button}><Text>Start your journey</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        gap: 16,
        backgroundColor: COLORS.background,
        position: 'relative',
        minHeight: 400
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
        backgroundColor: COLORS.primary,
        borderStyle: "solid",
        borderRadius: 10,


    }
});

export default LoginScreen;
