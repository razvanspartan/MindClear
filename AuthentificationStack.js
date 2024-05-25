import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import LandingScreen from "./screens/LandingScreen";
import {CardStyleInterpolators} from "@react-navigation/stack";


const Stack = createNativeStackNavigator();

function AuthentificationStack() {
    return (
        <Stack.Navigator initialRouteName='Landing'
                         screenOptions={{
                             headerShown: false,
                             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                         }}>
            <Stack.Screen options={{headerShown:false}} name="Landing" component={LandingScreen}/>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthentificationStack;