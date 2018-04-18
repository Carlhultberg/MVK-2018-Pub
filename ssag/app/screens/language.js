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

import { OFF_BLACK, BACKGROUND_COLOR, TEXT_COLOR, SELECTED, AUDIO_PLAYER_HIGHT } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  button: {
    height: 50,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: BACKGROUND_COLOR,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    color: TEXT_COLOR
  },
  image:{
    width: 50,
    height:50,
    //tintColor: TEXT_COLOR
  },
});

class Language extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.languageSelectBG();
  }

  languageSelectBG() {
    var isSelected = String(I18n.locale);
    if(isSelected === 'en'){
      this.setState({bgColorSelectedEn: SELECTED});
      this.setState({bgColorSelectedSv: BACKGROUND_COLOR});
    }else if(isSelected === 'sv'){
      this.setState({bgColorSelectedEn: BACKGROUND_COLOR});
      this.setState({bgColorSelectedSv: SELECTED});
    }

  }


  restart(language){
    realm.write(() => {
      languageR[0].name = language;
    });
    RNRestart.Restart();
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() =>  this.restart('en')  }>
            <View style={[styles.button, { backgroundColor: this.state.bgColorSelectedEn }]}>
              <Text style={styles.text}>
                English
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.restart('sv') }>
            <View style={[styles.button, { backgroundColor: this.state.bgColorSelectedSv }]}>
              <Text style={styles.text}>
                Svenska
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: AUDIO_PLAYER_HIGHT}}/>
      </ScrollView>
    );
  }
}

export default Language;
