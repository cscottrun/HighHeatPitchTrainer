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
    this.goGetReady = this.goGetReady.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser(data) {
    this.setState({user:data})
  }
  
  setScreen() {
    switch (this.state.screen) {
      case 'Home' : return (< Home goGetReady={this.goGetReady} setUser={this.setUser}/>);
      case 'GetReady' : return ( < GetReady user={this.state.user}/>);
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



