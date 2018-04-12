import React, {Component} from 'react';
import AudioPlayer from './audioPlayer';
import I18n, { languageRealm, realm, languageR } from '../i18n/i18n';
import RNRestart from 'react-native-restart';
import Realm from 'realm';

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

class AboutApp extends Component {

  render(){
    return(
      <View>

        <Text>
          Om appen
        </Text>

      </View>

    );
  }
}

export default AboutApp;
