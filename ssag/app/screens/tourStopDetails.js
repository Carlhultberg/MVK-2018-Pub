import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { OFF_BLACK, OFF_WHITE, LIGHT_GRAY } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 11;


const s = StyleSheet.create({
  audioListContainer: {
    height: cellHeight,
    width: cellWidth,
    borderBottomWidth: 1,
    borderBottomColor: OFF_WHITE,
    backgroundColor: LIGHT_GRAY,
  },
});


class TourStopDetails extends Component {

  render(){
    return(
      <View style={{
          height: cellHeight+2,
          width: cellWidth,
            }}>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer()}>
          <View style={s.audioListContainer}>
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
export default TourStopDetails;
