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
  styleFunc = function(highlight){
    if(highlight==1){
      return {
        color: '#FFFFFF', 
        fontSize: 16,
        backgroundColor: '#e5e500',
      }
    }else{
      return{
        color: '#000000', 
        fontSize: 16
      }
    }
  }
  render(){
    return(
      <View style={{
          height: cellHeight+2,
          width: cellWidth,
            }}>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer()}>
          <View style={s.audioListContainer}>
              <View>
                <Text style={this.styleFunc(this.props.highlight)}>{this.props.number}  {this.props.text}</Text>
              </View>
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
