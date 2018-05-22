// Copyright(c) 2018 Gustav Kjellberg, Gustaf Lidfeldt, Diar Sabri, Maria Lindblad,
// Lars Lundin, Carl Hultberg, Bruhan Hashi, Sebastian Franzén, Jesper Öberg,
// Björn Aurell Hansson, Tommy Samuelsson. gustav.kjellberg@hotmail.com

import React, { Component } from 'react';
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
const cellHeight = height * 2 / 3;
const buttonHeight = height * 1 / 18;

import { TEXT_COLOR, BACKGROUND_COLOR, AUDIO_PLAYER_HIGHT } from '../styles';

const s = StyleSheet.create({

  scrollContainer: {
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  textHeader: {
    marginTop: 16,
    fontSize: 20,
    color: TEXT_COLOR,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: TEXT_COLOR
  },
  filler: {
    height: AUDIO_PLAYER_HIGHT,
  },
});

class AboutApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      aboutTheAppProjectManagerNordicMuseumBody: 'Gustav Kjellberg',
      aboutTheAppDevelopmentAndDesignBody: 'Maria Lindblad\nTommy Samuelsson\nCarl Hultberg\nDiar Sabri\nLars Lundin\nBurhan Hashi',
      aboutTheAppDocumentationBody: 'Gustaf Lidfeldt\nJesper Öberg\nSebastian Franzén\nBjörn Aurell Hansson',
      aboutTheAppAdvisoryTeamBody: '[Advisory name here]',
      aboutTheAppAppIconBody: 'Ann-Sofia Marminge Design',
      aboutTheAppTranslationsBody: 'BTI Studios'
    };
  }

  render() {
    return (
      <ScrollView style={s.scrollContainer}>
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
            {I18n.t('aboutTheAppDocumentationHeader')}
          </Text>
          <Text style={s.text}>
            {this.state.aboutTheAppDocumentationBody}
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
          <View style={s.filler} />
        </View>
      </ScrollView>
    );
  }
}

export default AboutApp;
