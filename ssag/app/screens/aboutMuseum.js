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

import { TEXT_COLOR, BACKGROUND_COLOR, AUDIO_PLAYER_HIGHT } from '../styles';

const s = StyleSheet.create({
  scrollContainer: {
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  textHeader:{
    marginTop: 16,
    fontSize: 20,
    color: TEXT_COLOR,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
    color: TEXT_COLOR
  },
  filler: {
    height: AUDIO_PLAYER_HIGHT,
  },
});

class AboutApp extends Component {

  render(){
    return(
      <ScrollView style={s.scrollContainer}>
        <View style={s.container}>
          <Text style={s.text}>
            {I18n.t('aboutScreen_Overview')}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutScreen_AboutHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutScreen_AboutBody')}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutScreen_HoursHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutScreen_HoursBody1')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutScreen_HoursBody2')}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutScreen_AdmissionHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutScreen_AdmissionBody1')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutScreen_AdmissionBody2')}
          </Text>
          <View style={s.filler}/>
        </View>
      </ScrollView>
    );
  }
}

export default AboutApp;
