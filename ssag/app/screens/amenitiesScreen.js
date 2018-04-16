import React, {Component} from 'react';
import I18n from '../i18n/i18n';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height * 2/3 ;
const buttonHeight = height * 1/18;

import { OFF_BLACK, OFF_WHITE, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS, SELECTED } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OFF_WHITE,
  },

  button: {
    height: 50,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: OFF_WHITE,
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

class AmenitiesScreen extends Component {
  constructor() {
    super();
    this.state = {
      toiletsDropDown: false,
    };
  }

  toiletsFunction(){
    if(this.state.toiletsDropDown){
      return(
        <TouchableOpacity onPress = {() => this.setState({ toiletsDropDown: false })}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {I18n.t('amenities_ToiletsTitle')}
            </Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>
              {I18n.t('amenities_ToiletsTitle')}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }else{
      return(
        <TouchableOpacity onPress = {() => this.setState({ toiletsDropDown: true })}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {I18n.t('amenities_ToiletsTitle')}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }

  }

  render(){
    return(
      <View style={styles.container}>
        { this.toiletsFunction() }
      </View>

    );
  }
}

export default AmenitiesScreen;
