import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { COLORS } from '../constants/colors';
import Heart from "../images/heart";
import * as Font from 'expo-font';
import Icon from "../images/icon";
import {useState} from "react";

const Message = ({value, direction}) =>{
    const messageStyle = direction === 'incoming' ? styles.incoming : styles.ongoing;

    return(
        <View style={messageStyle}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color:COLORS.primary,
        width:"auto",
        paddingHorizontal: 6,

    },
    incoming:{
        margin: '3%',
        marginLeft: '10%',
        padding: '4%',
        width:'80%',
        minHeight:"5%",
        display:"flex",
        flexDirection:"column",
        backgroundColor: COLORS.accent2,
        borderRadius: 10,
        alignSelf: "flex-start",
    },
    ongoing:{
        margin: '3%',
        padding: '4%',
        width:'60%',
        minHeight:"5%",
        display:"flex",
        flexDirection:"column",
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        alignSelf: "flex-end",
    },
});

export default Message;