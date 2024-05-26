import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS} from "../constants/colors";
import Icon from "../images/icon";
import {useUserContext} from "../hooks/UserProvider";
import Message from "../components/Message";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

const Chat = ({navigation}) => {
    const [blockedButton, setBlockedButton] = useState(true);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState('');
    const scrollViewRef = useRef();


    const displayMessage = ()=>{
        console.log('Not yet.');

    }

    const startConversation = async () =>{
        try{
            const response = await axios.get('http://139.59.156.48:5000/api/startConversation');
            console.log('Response:', response.data);

            const incomingMessage = response.data.response;
            setMessages(prevMessages => [...prevMessages, { text: incomingMessage, direction: 'incoming' }]);
            setMessage('');
            setBlockedButton(false);
        }catch(erroraxios){
            setError(erroraxios);
            setShowError(true)
            console.error('Error:', error)
        }
    }


    const handleSendMessage = async () =>{
        try{
            setBlockedButton(true);
            setMessages(prevMessages => [...prevMessages, { text: message, direction: 'ongoing' }]);
            const response = await axios.post('http://139.59.156.48:5000/api/getNextMessage', {
                'message': message,
            });
            setMessage('');
            console.log('Response:', response.data);

            const incomingMessage = response.data.response;
            setMessages(prevMessages => [...prevMessages, { text: incomingMessage, direction: 'incoming' }]);
            setMessage('');
            setBlockedButton(false);
        }catch(erroraxios){
            setError(erroraxios);
            setShowError(true)
            console.error('Error:', error)
        }
    }
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    if (messages.length === 0)
        startConversation();

    const {user} = useUserContext();

    const buttonFunction = blockedButton === true ? displayMessage : handleSendMessage;

    return(
        <View style={styles.container}>
            <Icon style={styles.icon}></Icon>
            <Text style={styles.middle_titleSU}>Chat about your tasks</Text>
            <ScrollView style={styles.scrollView} ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {messages.map((msg, index) => (
                        <Message key={index} value={msg.text} direction={msg.direction} />
                    ))}
            </ScrollView>
            <View style={styles.textInputBox}>
                <TextInput style={styles.textInput} placeholder={"Input text..."} value={message} onChangeText={setMessage}>
                </TextInput>
                <Text onPress={buttonFunction} style={styles.sendButtom}>Send</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    scrollView:{
        height:'30%',
        width: '90%',
        flexGrow: 1,
        marginBottom: '5%',

    },
    messageBox:{
        height:'80%',
        width: '100%',
        alignItems:"center",
    },
    middle_titleSU:{
        fontSize: 28,
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
    textInput:{
        width: '80%',
        minHeight: 10,
        backgroundColor: COLORS.primary,
        alignSelf: "flex-start",
        borderRadius: 20,
        fontFamily: "Roboto-Bold",
        fontWeight:"800",
        padding: 15,
    },
    textInputBox:{
        width: '80%',
        minHeight: 10,
        backgroundColor: COLORS.primary,
        alignSelf: "center",
        marginBottom: '5%',
        borderRadius: 20,
        flexDirection: "row",
    },
    sendButtom:{
        backgroundColor: COLORS.primary,
        fontFamily: "Roboto-Bold",
        alignSelf: "center",
    },
})

export default Chat;
