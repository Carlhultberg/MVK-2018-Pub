import React, {Component} from 'react';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { OFF_BLACK, OFF_WHITE, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;

const styles = StyleSheet.create({

  Button: {
    backgroundColor: ACTION,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: cellWidth *0.9,
    borderRadius: 5,
    //marginRight: 16,
    //marginLeft: 16,
    marginBottom: 10,
  },
  ButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainView:{
    flex:1,
    alignItems: 'center',
    backgroundColor: OFF_WHITE,
  },
  text:{
    fontSize: 18,
    color: OFF_BLACK,
    textAlign: 'center',
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
});

class NearMeScreen extends Component {

  
  render(){
    return(
        <View style={styles.mainView}>
          <Text style={[styles.text, {marginTop: 16}]}>
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
        </View>
    );
  }
}

export default NearMeScreen;
