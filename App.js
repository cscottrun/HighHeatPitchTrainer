import React from 'react';
import { Text, View } from 'react-native';
import styles from './styleSheet.js'
import Home from './components/Home'
import Accelerometer from './components/Accelerometer'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      screen: 'Home'
    }
  }
  
  // screenSetter() {
  //   switch (this.state.screen) {
  //     case 'Home' : return (< Home />);
  //     case 'GetReady' : return ( < GetReady />);
  //     default: return ( < Home />);
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        < Home />
      </View>
    );
  }
}



