import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styleSheet.js'
import Home from './components/Home'
import GetReady from './components/GetReady'
import Accelerometer from './components/Accelerometer'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user: '',
      screen: 'Home'
    }
    this.goGetReady = this.goGetReady.bind(this)
  }
  
  setScreen() {
    switch (this.state.screen) {
      case 'Home' : return (< Home goGetReady={this.goGetReady}/>);
      case 'GetReady' : return ( < GetReady />);
      default: return ( < Home />);
    }
  }

  goGetReady () {
    this.setState({screen:'GetReady'})
  }

  render() {
    return (
      <View style={styles.container}>
    
        {this.setScreen()}
      </View>
    );
  }
}



