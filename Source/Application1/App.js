import React from 'react';

import Loading from './pages/Loading';
import Connection from './pages/Connection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {
    ScreenOrientation
} from 'expo';

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

// function that lock orientation
function lockScreenPortrait() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
}

export default class App extends React.Component {
    render() {
        lockScreenPortrait();

        return (
            <SignUp/>
        );
    }
}
