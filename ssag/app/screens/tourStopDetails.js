import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 11;

class TourStopDetails extends Component {

  render(){
    return(
      <View style={{
          height: cellHeight+2,
          width: cellWidth,
            }}>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer(this.props.audio)}>
          <View style={{
              height: cellHeight,
              width: cellWidth,
              backgroundColor: '#EDEDED',
                }}>
                <Text>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
        <View style={{
            height: 2,
            width: cellWidth,
            backgroundColor: '#0000',
              }}>
        </View>
      </View>
    );
  }
}
export default TourStopDetails;
