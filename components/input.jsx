import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
import {useState} from "react";

const InputStuff = ({placeholder, name, type, onChangeText, value }) =>{
    const [isFocused, setIsFocused] = useState(false);
    return(
        <View style={styles.containerstuff}>
        <Text style={styles.ontopofInput}>{name}</Text>
    <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
        style={[
            styles.fnlnInput,
            { borderColor: isFocused ? '#004080' : '#001F3D' },
        ]}
        keyboardType={type}
        secureTextEntry={type === 'password'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
    /></View>
    );
}

const styles = StyleSheet.create({
    ontopofInput:{
        position:"absolute",
        left:75,
        top:-8,
        backgroundColor:COLORS.background,
        zIndex:1,
        color:COLORS.primary,
        width:"auto",
        paddingHorizontal: 6,

    },
    containerstuff:{
        width:'100%',
        height:"10%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    fnlnInput:{
        borderWidth:3,
        borderRadius: 8,
        borderColor: "#004080",
        width:'70%',
        height:'90%',
        padding:10,
        fontFamily: "Lato-Regular",
        color: COLORS.primary,
        fontSize: 16
    },
});

export default InputStuff;