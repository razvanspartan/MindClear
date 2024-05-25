import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthentificationStack from './AuthentificationStack';
import LoggedInStack from './LoggedInStack';

import { useFonts } from 'expo-font';
// import { Nunito_300Light,Nunito_400Regular ,Nunito_600SemiBold,Nunito_700Bold} from '@expo-google-fonts/nunito';

const AppLayout = () => {
    const user = undefined;
    return (
        <NavigationContainer>
            {user!=undefined?
                <LoggedInStack />:<AuthentificationStack />}
        </NavigationContainer>
    );
};

export default AppLayout;