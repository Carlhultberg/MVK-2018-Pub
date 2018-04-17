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
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';


const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height * 2/3 ;
const buttonHeight = height * 1/18;

import { BACKGROUND_COLOR, BORDER_COLOR_2, TEXT_COLOR, BUTTON_ON_PRESS_COLOR_2, AUDIO_PLAYER_HIGHT} from '../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    //marginLeft: 16,
    //marginRight: 30,
  },
  button: {
    height: 40,
    width: cellWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: BORDER_COLOR_2,
    borderBottomWidth: 1,
  },
  text:{
    marginLeft: 16,
    fontSize: 20,
    color: TEXT_COLOR,
  },
  image:{
    width: 50,
    height: 50,
    //tintColor: TEXT_COLOR
  },
});

class InfoScreen extends Component {

  render(){
    return(
        <ScrollView>
          <Image style={{ height:cellHeight, width: cellWidth }} source={require('../Images/museum1.png')}/>
          <View style={styles.container}>
            <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_2} onPress={() => this.props.navigation.navigate('Language')}>
              <View style={styles.button}>
                <Text style={styles.text}>
                  {I18n.t('settingsScreen_Title')}
                </Text>
                <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_2} onPress={() => this.props.navigation.navigate('AmenitiesScreen')}>
              <View style={styles.button}>
                <Text style={styles.text}>
                  {I18n.t('amenitiesScreen_Title')}
                </Text>
                <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_2} onPress={() => this.props.navigation.navigate('AboutMuseum')}>
              <View style={styles.button}>
                <Text style={styles.text}>
                  {I18n.t('museumScreen_ListItem1Label')}
                </Text>
                <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_2} onPress={() => this.props.navigation.navigate('AboutApp')}>
              <View style={styles.button}>
                <Text style={styles.text}>
                  {I18n.t('aboutTheAppScreen_Title')}
                </Text>
                <Image style={styles.image} source={require('../assets/DisclosureIndicator.png')}/>
              </View>
            </TouchableHighlight>
            <View style={{height: AUDIO_PLAYER_HIGHT}}/>
          </View>
        </ScrollView>
    );
  }
}

export default InfoScreen;
