import React from 'react';

// import lock-screen component
import {
    ScreenOrientation
} from 'expo';

// import router component
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// import all pages
import Loading from './pages/Loading';
import Connection from './pages/Connection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// function that lock orientation
function lockScreenPortrait() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
}

// class App
class App extends React.Component {
    render() {
        lockScreenPortrait();

        return (
            <Connection/>
        );
    }
}

// Router configuration
const AppNavigator = createStackNavigator ({
    Connection: Connection,
    SignIn: SignIn,
    SignUp: SignUp,
},
{
    defaultNavigationOptions: {
        header: null,
    }
});

export default createAppContainer(AppNavigator);
