import React, { Component } from 'react';

import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native';

import { TEXT_COLOR_2, BACKGROUND_COLOR, AUDIO_PLAYER_HIGHT } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;

const styles = StyleSheet.create({
  image: {
    height: cellHeight,
    width: cellWidth,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  durationIcon: {
    marginRight: 5,
    tintColor: '#ffffff'
  },
  floorIcon: {
    marginRight: 5,
    tintColor: '#ffffff'
  },
  textBox: {
    width: cellWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 19,
    color: TEXT_COLOR_2
  },
  text2: {
    color: TEXT_COLOR_2,
    paddingRight:5
  },
  text3: {
    color: TEXT_COLOR_2,
    paddingRight:5
  },
  text4: {
    fontSize: 19,
    color: TEXT_COLOR_2,
    backgroundColor: 'yellow'
  },
  timeBox: {
    flexDirection: 'row',
  },
});

class HighlightScreenDetails extends Component {
  styleFunc = function(floor){
    if(floor===''){
      return {
        fontSize: 19,
        color: '#ffffff',
        backgroundColor: '#e5e500'
      }
    }else{
      return{
        fontSize: 19,
        color: '#ffffff'
      }
    }
  }
  render() {
    return (
      <View style={{
        height: cellHeight + 2,
        width: cellWidth,
      }}>
        <TouchableOpacity onPress={() => this.props.learnMore(this.props.title, this.props.image, this.props.duration, this.props.floor, this.props.songs)}>
          <ImageBackground style={styles.image}
            source={this.props.image}>
            <View style={styles.textBox}>
              <Text style={this.styleFunc(this.props.floor)}>
                {this.props.title}
              </Text>
              <View style={styles.timeBox}>
                <Image
                  style={styles.durationIcon}
                  source={require('../Images/ClockIcon.png')}
                />
                <Text style={styles.text2}>
                  {this.props.duration}
                </Text>
                <Image
                  style={styles.floorIcon}
                  source={require('../Images/FloorIcon.png')}
                />
                <Text style={styles.text3}>
                  {this.props.floor}
                </Text>
              </View>
            </View>
          </ImageBackground>
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
export default HighlightScreenDetails;
