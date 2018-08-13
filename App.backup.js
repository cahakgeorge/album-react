/* sample react 
native app */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Button, DatePickerAndroid } from 'react-native';


/* export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
} */

export default class AlertTest extends Component {
 async _onPressButton() {
    /* Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    ) */
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: new Date()
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
  };
  render() {
    return (
      <View style={styles.container}>

        <View  style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Alert me"
            color="steelblue"
            accessibilityLabel="Press to bring up alert"
            />
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 100,
    flex:0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlertTest);
