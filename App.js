import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styleSheet.js'
import Accelerometer from './components/Accelerometer'
import Home from './components/Home'
import GetReady from './components/GetReady'
import Play from './components/Play'
import Results from './components/Results'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user: '',
      screen: 'Home'
    }
    this.goGetReady = this.goGetReady.bind(this);
    this.goPlay = this.goPlay.bind(this);
    this.goToResults = this.goToResults.bind(this);


    this.setUser = this.setUser.bind(this);
  }

  setUser(data) {
    this.setState({user:data})
  }
  
  setScreen() {
    switch (this.state.screen) {
      case 'Home' : return (< Home goGetReady={this.goGetReady} setUser={this.setUser}/>);
      case 'GetReady' : return ( < GetReady user={this.state.user} goPlay={this.goPlay}/>);
      case 'Play' : return ( < Play goToResults={this.goToResults}/>);
      case 'Results' : return ( < Results goGetReady={this.goGetReady}/>);

      default: return ( < Home />);
    }
  }

  goGetReady () {
    this.setState({screen:'GetReady'})
  }

  goPlay () {
    this.setState({screen:'Play'})
  }

  goToResults () {
    this.setState({screen:'Results'})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.setScreen()}
      </View>
    );
  }
}



