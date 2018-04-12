import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Player, MediaStates } from 'react-native-audio-toolkit';

class AudioPlayer extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    if (this.props.logo == require('../assets/PauseButton.png')){
      this.props.audio.play();
    }
  }

  PlayPause = () => {
    if (this.props.logo == require('../assets/PauseButton.png') ){
      this.props.audio.pause();
      this.props.changeLogo();
    } else {
      this.props.audio.play();
      this.props.changeLogo();
    }
  }

  Next = () => {
    console.log("Microcuts");
    this.props.nextSong();
  }

  Previous = () => {
    this.props.previousSong();
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            backgroundColor: '#000000',
            alignItems: 'center',
            height: 30,
            justifyContent: 'flex-end',
            elevation: 2,
            position: 'relative'
          }}>
          <Text style={{color: '#ffffff', fontSize: 15}}>{this.props.audioNumber} {this.props.audioName}</Text>
        </View>
        <View
          style={{
              backgroundColor: '#000000',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 40,
              paddingTop: 15,
              shadowColor: '#0000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              elevation: 2,
              position: 'relative',
              flexDirection: 'row'
            }}>
          <TouchableOpacity onPress={this.Previous}>
            <Image style={{height: 30, width: 30, transform: [{rotate: '180deg'}]}} source={require('../assets/SkipButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.PlayPause }>
            <Image style={{height: 30, width: 30}} source={ this.props.logo } />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Next}>
            <Image style={{height: 30, width: 30}} source={require('../assets/SkipButton.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  }

export default AudioPlayer;
