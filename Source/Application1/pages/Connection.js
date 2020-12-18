import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Connection extends React.Component {
    _onPressButton() {
    alert('You tapped the button!');
  }


    render() {
        return (
            <View style = {(styles.container)}>
                <View style={(styles.innerContainer)}>
                    <Image source={require('./../images/logo.png')} />
                </View>

                <View style={(styles.innerContainerWelcome)}>
                    <View>
                        <Text style={(styles.innerContainerWelcomeText1)}>Bienvenue sur MedicGlobal</Text>
                        <Text style={(styles.innerContainerWelcomeText2)}>Connecter-vous ou inscrivez-vous pour commencer</Text>
                    </View>
                    <View style={(styles.innerContainerWelcomeConnection)}>
                        <TouchableOpacity style={(styles.innerContainerWelcomeConnectionButton)} onPress={this._onPressButton}>
                            <Text style={(styles.innerContainerWelcomeConnectionButtonText)}>S'identifier</Text>
                        </TouchableOpacity>
                        <Text style={(styles.innerContainerWelcomeConnectionLine)}></Text>
                        <TouchableOpacity style={(styles.innerContainerWelcomeConnectionButton)} onPress={()=>{}}>
                            <Text style={(styles.innerContainerWelcomeConnectionButtonText)}>S'inscrire</Text>
                        </TouchableOpacity>
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
      marginTop: 50,
      padding: 30,
      borderRadius: 30,
      width: '80%',
      elevation: 50,
  },
  innerContainerWelcome: {
      backgroundColor: 'white',
      flex: 6,
      width: '95%',
      marginBottom: 70,
      marginTop: 250,
      alignItems: 'center',
      elevation: 50,
  },
  innerContainerWelcomeText1: {
      flex: 0,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: '900',
      color: '#222f3e',
      marginTop: 30,
      letterSpacing: 1
  },
  innerContainerWelcomeText2: {
      flex: 0,
      margin: 20,
      fontSize: 18,
      color: '#222f3e',
      letterSpacing: 1
  },
  innerContainerWelcomeConnection: {
      flex: 5,
      width: '100%',
  },
  innerContainerWelcomeConnectionLine: {
      alignItems : 'center',
      justifyContent: 'center',
      width: '90%',
      borderBottomColor: '#8395a7',
      borderBottomWidth: 1,
      height: 1,
      marginLeft: 25,
  },
  innerContainerWelcomeConnectionButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  innerContainerWelcomeConnectionButtonText: {
      fontSize: 30,
      color: '#8395a7',
      letterSpacing: 2
  }

});
