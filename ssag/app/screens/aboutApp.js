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

const s = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  textHeader:{
    marginTop: 16,
    fontSize: 20,
    color: OFF_BLACK,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
    color: OFF_BLACK
  },
  filler: {
    height: 60,
  },
});

class AboutApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
        aboutTheAppProjectManagerNordicMuseumBody: '[Project Manager name here]',
        aboutTheAppDevelopmentAndDesignBody: 'Maria Lindblad\nTommy Samuelsson\nCarl Hultberg\nDiar Sabri(cool guy)\nLars Lundin(coolest guy)\nBurhan Hashi',
        aboutTheAppAdvisoryTeamBody: '[Advisory name here]',
        aboutTheAppAppIconBody: 'Ann-Sofia Marminge Design',
        aboutTheAppTranslationsBody: 'BTI Studios'
    };
}

  render(){
    return(
      <ScrollView>
        <View style={s.container}>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppAudioContentHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutTheAppAudioContentBody')}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppTheAppHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutTheAppTheAppBody')}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppProjectManagerNordicMuseumHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppProjectManagerNordicMuseumBody}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppDevelopmentAndDesignHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppDevelopmentAndDesignBody}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppAdvisoryTeamHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppAdvisoryTeamBody}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppAppIconHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppAppIconBody}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppTranslationsHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppTranslationsBody}
          </Text>
          <Text style={s.textHeader}>
            {I18n.t('aboutTheAppPhotoCreditsHeader')}
          </Text>
          <Text style={s.text}>
            {I18n.t('aboutTheAppPhotoCreditsBody')}
          </Text>
          <View style={s.filler}/>
        </View>
      </ScrollView>
    );
  }
}

export default AboutApp;
