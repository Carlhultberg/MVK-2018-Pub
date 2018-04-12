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
    height: 50,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F7F7F7',
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    color: OFF_BLACK
  },
  image:{
    width: 50,
    height:50,
    //tintColor: OFF_BLACK
  },
});

class Language extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.languageSelectBG(2);
  }

  languageSelectBG(isSelected) {
    var isSelected = String(I18n.locale);
    if(isSelected === 'en'){
      this.setState({bgColorSelectedEn: '#FAE3E7'});
      this.setState({bgColorSelectedSv: '#EFEFF4'});
    }else if(isSelected === 'sv'){
      this.setState({bgColorSelectedEn: '#EFEFF4'});
      this.setState({bgColorSelectedSv: '#FAE3E7'});
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
        <View style={{flex: 1}}>
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
    );
  }
}

export default Language;
