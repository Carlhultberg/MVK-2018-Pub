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

import { OFF_BLACK, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;

const styles = StyleSheet.create({

  Button: {
    backgroundColor: '#E52484',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 5,
  },

  ButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  mainView:{
    flex:1,
    alignItems: 'center',
  },
  text:{
    fontSize: 18,
    color: OFF_BLACK,
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
});

class NearMeScreen extends Component {

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
      <View style={{flex:1}}>
        <View style={styles.mainView}>
          <Text style={styles.text}>
            {I18n.t('nearMeScreen_StoriesMessage')}
          </Text>
          <View style={{
              height: 20,
              width: cellWidth,
              backgroundColor: '#ffffff',
                }}>
          </View>
          <Text style={styles.text}>
            {I18n.t('nearMeScreen_LocationNeeds')}
          </Text>
          <View style={{
              height: 20,
              width: cellWidth,
              backgroundColor: '#ffffff',
                }}>
          </View>
          <TouchableOpacity
            style={[styles.Button, { width: 0.90 * width }]}>
            <Text style={styles.ButtonText}>
              {I18n.t('locationServicesButton_Label')}
            </Text>
          </TouchableOpacity>
          <View style={{
              height: 10,
              width: cellWidth,
              backgroundColor: '#ffffff',
                }}>
          </View>
          <TouchableOpacity
            style={[styles.Button, { width: 0.90 * width }]}>
            <Text style={styles.ButtonText}>
              {I18n.t('bluetoothButton_OffLabel')}
            </Text>
          </TouchableOpacity>
        </View>
        { this.bottomComponent() }
      </View>
    );
  }
}

export default NearMeScreen;
