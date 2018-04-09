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
    this.state = {highlights: [
      {title: "Stockholm1", image: require('../Images/stockholm1.png')},
      {title: "Old Stockholm1", image: require('../Images/oldStockholm1.png')},
      {title: "Stockholm2", image: require('../Images/stockholm2.png')},
      {title: "Old Stockholm2", image: require('../Images/oldStockholm2.png')},
      {title: "Stockholm3", image: require('../Images/stockholm3.png')},
      {title: "Old Stockholm3", image: require('../Images/oldStockholm3.png')}] };
  }

  renderHighlights() {
    return this.state.highlights.map(highlights =>
      <HighlightScreenDetails key={highlights.title} title={highlights.title} image={highlights.image} learnMore={this.learnMore}/>
    );
  }

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

  learnMore = (image) => {
    this.props.navigation.navigate('TourstopScreen');
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <ScrollView>
          { this.renderHighlights() }
        </ScrollView>
        { this.bottomComponent() }
      </View>
    );
  }
}
export default HighlightScreen;
