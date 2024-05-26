import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/SignUpScreen";
import EmployeePage from "./screens/EmployeePage";
import SignIn from "./screens/SignIn";
import Chat from "./screens/Chat";
import EmployeeSignIn from "./screens/EmployeeSignIn";
import EmployeeAdd from "./screens/EmployeeAdd";


const Stack = createNativeStackNavigator();

function LoggedInStack({initialRouteName}) {
    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen options={{headerShown: false}} name="Chat" component={Chat} />
            <Stack.Screen options={{headerShown: false}} name="EmployeePage" component={EmployeePage} />
            <Stack.Screen options={{headerShown: false}} name="EmployeeAdd" component={EmployeeAdd} />
        </Stack.Navigator>
    );
}

export default LoggedInStack;