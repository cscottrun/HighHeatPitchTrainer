import React from 'react';
import { Text, View , ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styleSheet.js';
let party = 'http://www.swantonschool.org/wp-content/uploads/2016/03/celebration.jpg'

// pass score to this comp as prop

export default class Results extends React.Component {
  render() {
    let background = {uri: party};
    return (
      <ImageBackground 
        source={background} 
        style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>
          <Text style={[styles.header, styles.whiteText]}>Great Pitch!</Text>
          <Text style={[styles.whiteText, styles.p, styles.textTopMargin]}>You Pitched</Text>
          <Text style={[styles.header, styles.whiteText]}>50</Text>


        <TouchableOpacity
         style={styles.button}
         onPress={this.props.goGetReady}>
          <Text style={{color:'white'}}> Play Again </Text>
        </TouchableOpacity>

        </View>

      </ImageBackground>
    );
    
  }
}