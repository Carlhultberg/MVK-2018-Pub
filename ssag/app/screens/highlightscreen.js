import React, { Component } from 'react';
import AudioPlayer from './audioPlayer';
import { Player, MediaStates } from 'react-native-audio-toolkit';
import HighlightScreenDetails from './highlightscreenDetails';
import I18n from '../i18n/i18n';

import {
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  View,
  Text
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;

class HighlightScreen extends Component {
  constructor(props) {
    super(props);

    var json = require('../soundInfo/exhibitionInfo.json');
    var array = [];
    var json_length = Object.keys(json).length;
    var required;
    for(var i=0; i<json_length; i++){
      switch(json[String(i)]["image"]){
        case "0": 
          required = require('../Images/stockholm1.png');
          break;
        case "1":
          required = require('../Images/oldStockholm3.png');
          break;
        case "2": 
          required = require('../Images/stockholm2.png');
          break;
      }
      array.push({title: json[String(i)]["name"], image: required, duration: json[String(i)]["duration"],songs:json[String(i)]["sounds"],floor:json[String(i)]["floor"]});
    }
    this.state = {highlights: array};

  }

  renderHighlights() {
    return this.state.highlights.map(highlights =>
      <HighlightScreenDetails key={highlights.title} title={highlights.title} image={highlights.image} duration={highlights.duration} songs={highlights.songs} floor={highlights.floor} learnMore={this.learnMore}/>
    );
  }

  learnMore = (title,image,duration,floor,songs) => {
    this.props.navigation.navigate('TourstopScreen', { title,image,duration,floor,songs});
  }

  render() {
    return(
        <ScrollView>
          { this.renderHighlights() }
          <View style={{height: 60}}/>
        </ScrollView>
    );
  }
}
export default HighlightScreen;
