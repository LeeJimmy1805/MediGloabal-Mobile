import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

export default class SignUp extends React.Component {
    _onPressButton() {
    alert('You tapped the button!');
  }


    render() {
        return (
            <View style = {(styles.container)}>
                <View style={(styles.innerContainer)}>
                    <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
                    <Image source={require('./../images/logo.png')} />
                </View>

                <View style={(styles.innerContainerSignUp)}>
                    <View>
                        <Text style={(styles.innerContainerSignUpText)}>S'inscrire</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0984e3',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  innerContainer: {
      backgroundColor: 'white',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      padding: 30,
      width: '95%',
      elevation: 50,
  },
  innerContainerSignUp: {
      flex: 18,
      backgroundColor: 'white',
      alignItems: 'center',
      width: '95%',
      marginTop: '5%',
      marginBottom: '5%',
      elevation: 50,
  },
  innerContainerSignUpText: {
      margin: 50,
      fontSize: 25,
      letterSpacing: 2
  }
});
