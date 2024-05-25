import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";


const Stack = createNativeStackNavigator();

function AuthentificationStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthentificationStack;