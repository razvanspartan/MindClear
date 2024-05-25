import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/SignUpScreen";
import LandingScreen from "./screens/LandingScreen";
import {CardStyleInterpolators} from "@react-navigation/stack";
import SignUp from "./screens/SignUpScreen";


const Stack = createNativeStackNavigator();

function AuthentificationStack() {
    return (
        <Stack.Navigator initialRouteName='Landing'
                         screenOptions={{
                             headerShown: false,
                             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                         }}>
            <Stack.Screen options={{headerShown:false}} name="Landing" component={LandingScreen}/>
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthentificationStack;