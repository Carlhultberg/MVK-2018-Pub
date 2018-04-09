import React, {Component} from 'react';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
import RNRestart from 'react-native-restart';

import {
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AsyncStorage,
} from 'react-native';


const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height * 2/3 ;
const buttonHeight = height * 1/18;

import { OFF_BLACK, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS } from '../styles';

const styles = StyleSheet.create({
  button: {
    height: buttonHeight,
    width: cellWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    color: OFF_BLACK
  },
  image:{
    width: 50,
    height:50,
  //  tintColor: OFF_BLACK
  },
});

class Language extends Component {

  restart(language){
    AsyncStorage.setItem('key', language);
    RNRestart.Restart();
  }

  bottomComponent(){
    if(this.props.screenProps.bottomScreen){
      return (
        <View style={{height: 60}}>
          <AudioPlayer
            audio = {this.props.screenProps.currentAudio}
            logo = {this.props.screenProps.logo}
            changeLogo = {this.props.screenProps.changeLogo}
          />
      </View>
      )
    }
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => this.restart('en')}>
            <View style={styles.button}>
              <Text style={styles.text}>
                English
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.restart('sv')}>
            <View style={styles.button}>
              <Text style={styles.text}>
                Svenska
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        { this.bottomComponent() }
      </View>
    );
  }
}

export default Language;
