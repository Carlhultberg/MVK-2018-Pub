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

    var json = require('../amenities/amenities.json');
    var array = [];
    var json_length = Object.keys(json).length;
    for(var i=0; i<json_length; i++){
      array.push({number: String(i), string: json[String(i)]["string"], floors: json[String(i)]["floors"], dropDown: false});
    }
    this.state = {
      amenities: array,
    };
  }

  renderAmenities() {
    return this.state.amenities.map(amenity =>
      this.toiletsFunction( amenity )
    );
  }

  updateArray(b, number, amenity){
    var array = this.state.array;
  //  amenity.dropDown = b;
    array[number].dropDown = b;
    this.setState({ array: array });
  }

  toiletsFunction(amenity){
    if(amenity.dropDown){
      return(
        <View>
          <TouchableOpacity onPress = {() => this.updateArray(false, amenity.number, amenity)}>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t('amenities_ToiletsTitle')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>
              {I18n.t('floor')}
            </Text>
          </View>
        </View>
      )
    }else{
      return(
        <TouchableOpacity onPress = {() => this.updateArray(true, amenity.number, amenity)}>
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
        { this.renderAmenities() }
      </View>

    );
  }
}

export default AmenitiesScreen;
