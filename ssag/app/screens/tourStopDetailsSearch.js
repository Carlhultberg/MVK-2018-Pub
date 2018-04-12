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

class TourStopDetailsSearch extends Component {

  render(){
    return(
      <View style={{
          height: cellHeight+2,
          width: cellWidth,
            }}>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer()}>
          <View style={{
              height: cellHeight,
              width: cellWidth,
              backgroundColor: '#EDEDED',
                }}>
                <Text style={{color: '#000000', fontSize: 16}}>{this.props.number}  {this.props.text}</Text>
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
export default TourStopDetailsSearch;
