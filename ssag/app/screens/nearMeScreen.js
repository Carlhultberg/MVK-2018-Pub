// Copyright(c) 2018 Gustav Kjellberg, Gustaf Lidfeldt, Diar Sabri, Maria Lindblad,
// Lars Lundin, Carl Hultberg, Bruhan Hashi, Sebastian Franzén, Jesper Öberg,
// Björn Aurell Hansson, Tommy Samuelsson. gustav.kjellberg@hotmail.com

import React, { Component } from 'react';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
import { TEXT_COLOR, BACKGROUND_COLOR, ACTION, AUDIO_PLAYER_HIGHT } from '../styles';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;

const styles = StyleSheet.create({

  Button: {
    backgroundColor: ACTION,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: cellWidth * 0.9,
    borderRadius: 5,
    marginBottom: 10,
  },
  ButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  text: {
    fontSize: 18,
    color: TEXT_COLOR,
    textAlign: 'center',
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
});

class NearMeScreen extends Component {

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={[styles.text, { marginTop: 16 }]}>
          {I18n.t('nearMeScreen_StoriesMessage')}
        </Text>
        <Text style={styles.text}>
          {I18n.t('nearMeScreen_LocationNeeds')}
        </Text>
        <TouchableOpacity
          style={styles.Button}>
          <Text style={styles.ButtonText}>
            {I18n.t('locationServicesButton_Label')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}>
          <Text style={styles.ButtonText}>
            {I18n.t('bluetoothButton_OffLabel')}
          </Text>
        </TouchableOpacity>
        <View style={{ height: AUDIO_PLAYER_HIGHT }} />
      </View>
    );
  }
}

export default NearMeScreen;
