import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { Player, MediaStates } from 'react-native-audio-toolkit';
import { AUDIO_PLAYER_COLOR, HIGHLIGHTS_TEXT, HIGHLIGHTS, TEXT_COLOR_2 } from '../styles';

const s = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: AUDIO_PLAYER_COLOR,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  audioTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    justifyContent: "center",
  },
  audioTitleNumber: {
    color: TEXT_COLOR_2,
    fontSize: 15,
    marginLeft: 4,
    marginRight: 4,
  },
  audioTitleName: {
    color: TEXT_COLOR_2,
    fontSize: 15,
  },
  audioPlayer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  audioIcon: {
    height: 30,
    width: 30,
  },
  highlightContainer: {
    borderRadius: 4,
    marginRight: 8,
  },
  audioDurationContainer: {
    backgroundColor: '#E9B5AB',
    height: 10,

  },
});

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    if (this.props.logo == require('../assets/PauseButton.png')) {
      this.props.audio.play();
    }
    this.highlighted(this.props.highlight);
  }

  PlayPause = () => {
    if (this.props.logo == require('../assets/PauseButton.png')) {
      this.props.audio.pause();
      this.props.changeLogo();
    } else {
      this.props.audio.play();
      this.props.changeLogo();
    }
  }

  Next = () => {
    this.props.nextSong();
    this.highlighted(this.props.highlight);
  }

  Previous = () => {
    this.props.previousSong();
    this.highlighted(this.props.highlight);
  }

  componentDidMount() {
    this.highlighted(this.props.highlight);
  }

  highlighted(h) {
    if (h == 1) {
      this.setState({ textColorHighlight: HIGHLIGHTS_TEXT });
      this.setState({ bgColorHighlight: HIGHLIGHTS });
    }
    else {
      this.setState({ textColorHighlight: TEXT_COLOR_2 });
    }
  }

  render(){
    return (
      <View style={s.container}>
        <View style={s.audioDurationContainer}>
        </View>
        <View style={s.audioTitleContainer}>
          <View style={[s.highlightContainer, { backgroundColor: this.state.bgColorHighlight }]}>
            <Text style={[s.audioTitleNumber, { color: this.state.textColorHighlight }]}>
              {this.props.audioNumber}
            </Text>
          </View>
          <Text style={s.audioTitleName}>
            {this.props.audioName} {this.props.duration}
          </Text>
        </View>
        <View style={s.audioPlayer}>
          <TouchableOpacity onPress={this.Previous}>
            <Image style={{ height: 30, width: 30, transform: [{ rotate: '180deg' }] }} source={require('../assets/SkipButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.PlayPause}>
            <Image style={s.audioIcon} source={this.props.logo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Next}>
            <Image style={s.audioIcon} source={require('../assets/SkipButton.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

export default AudioPlayer;
