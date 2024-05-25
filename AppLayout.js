import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthentificationStack from './AuthentificationStack';
import LoggedInStack from './LoggedInStack';
import * as Font from 'expo-font';
import {useUserContext} from "./hooks/UserProvider";



const AppLayout = () => {
    const {user} = useUserContext();
    const loadFonts = () => {
        return Font.loadAsync({
            'Roboto-Bold': require('./assets/RobotoFont/Roboto-Bold.ttf'),
            'Lato-Regular': require('./assets/LatoFont/Lato-Regular.ttf'),
            'Lato-Bold': require('./assets/LatoFont/Lato-Bold.ttf')
        });
    };
    return (
        <NavigationContainer>
            {user!==undefined?
                <LoggedInStack />:<AuthentificationStack />}
        </NavigationContainer>
    );
};

export default AppLayout;