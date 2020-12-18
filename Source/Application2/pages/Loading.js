import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Image
} from 'react-native';

export default class Loading extends React.Component {
    render() {
        return (
            <View style = {(styles.container)}>
                <View style={(styles.innerContainer)}>
                    <Image style={(styles.logo)} source={require('./../images/logo.png')} />
                </View>
                <ActivityIndicator style={(styles.innerContainerLoading)} size="large" color="#000000"/>
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
      padding: 30,
      borderRadius: 30,
      elevation: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
  innerContainerLoading: {
      paddingTop: 20,
  }
});
