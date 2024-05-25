import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/SignUpScreen";
import EmployeePage from "./screens/EmployeePage";
import SignIn from "./screens/SignIn";
import Chat from "./screens/Chat";


const Stack = createNativeStackNavigator();

function LoggedInStack() {
    return (
        <Stack.Navigator initialRouteName='Chat'>
            <Stack.Screen options={{headerShown: false}} name="Chat" component={Chat} />
            <Stack.Screen options={{headerShown: false}} name="EmployeePage" component={EmployeePage} />
        </Stack.Navigator>
    );
}

export default LoggedInStack;