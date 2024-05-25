import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/SignUpScreen";
import EmployeePage from "./screens/EmployeePage";
import SignIn from "./screens/SignIn";


const Stack = createNativeStackNavigator();

function LoggedInStack() {
    return (
        <Stack.Navigator initialRouteName='EmployeePage'>
            <Stack.Screen options={{headerShown: false}} name="EmployeePage" component={EmployeePage} />
        </Stack.Navigator>
    );
}

export default LoggedInStack;