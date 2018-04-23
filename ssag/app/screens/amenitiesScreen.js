import React, { Component } from 'react';
import I18n from '../i18n/i18n';
import AmenitiesScreenDetails from './amenitiesScreenDetails'

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
const cellHeight = height * 2 / 3;
const buttonHeight = height * 1 / 18;

import { BACKGROUND_COLOR, AUDIO_PLAYER_HIGHT } from '../styles';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  filler: {
    height: AUDIO_PLAYER_HIGHT,
  },
});

class AmenitiesScreen extends Component {
  constructor() {
    super();

    var json = require('../amenities/amenities.json');
    var array = [];
    var json_length = Object.keys(json).length;
    for (var i = 0; i < json_length; i++) {
      array.push({ number: String(i), string: json[String(i)]["string"], floors: json[String(i)]["floors"], dropDown: false });
    }
    this.state = {
      amenities: array,
    };
  }

  renderAmenities() {
    return this.state.amenities.map(amenity =>
      <AmenitiesScreenDetails key={amenity.number} number={amenity.number} string={amenity.string} floors={amenity.floors} dropDown={amenity.dropDown} />
    );
  }

  render() {
    return (
      <ScrollView style={s.container}>
        <View>
          {this.renderAmenities()}
        </View>
        <View style={s.filler} />
      </ScrollView>

    );
  }
}

export default AmenitiesScreen;