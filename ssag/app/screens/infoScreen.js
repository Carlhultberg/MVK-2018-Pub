import React, {Component} from 'react';
import AudioPlayer from './audioPlayer';
import Language from './language';
import I18n from '../i18n/i18n';
import {
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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

class InfoScreen extends Component {

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
        <ScrollView>
          <Image style={{ height:cellHeight, width: cellWidth }} source={require('../Images/museum1.png')}/>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Language')}>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t('settingsScreen_Title')}
              </Text>
              <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
            </View>
          </TouchableOpacity>
          <View style={{
              height: 1,
              width: cellWidth,
              backgroundColor: LIGHT_GRAY,
                }}>
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t('amenitiesScreen_Title')}
              </Text>
              <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
            </View>
          </TouchableOpacity>
          <View style={{
              height: 1,
              width: cellWidth,
              backgroundColor: LIGHT_GRAY,
                }}>
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t('museumScreen_ListItem1Label')}
              </Text>
              <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
            </View>
          </TouchableOpacity>
          <View style={{
              height: 1,
              width: cellWidth,
              backgroundColor: LIGHT_GRAY,
                }}>
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t('aboutTheAppScreen_Title')}
              </Text>
              <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
            </View>
          </TouchableOpacity>
        </ScrollView>
        { this.bottomComponent() }
      </View>
    );
  }
}

export default InfoScreen;
