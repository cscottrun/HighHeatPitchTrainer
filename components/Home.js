import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styleSheet.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to High Heat </Text>
      </View>
    );
  }
}

