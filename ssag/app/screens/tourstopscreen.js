import React from 'react';
import AudioPlayer from './audioPlayer';
import { Player, MediaStates } from 'react-native-audio-toolkit';
import TourStopDetails from './tourStopDetails';
import I18n from '../i18n/i18n';

import {
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  containerMargin,
  Text,
  ImageBackground,
} from 'react-native';

import { BACKGROUND_COLOR_2, TEXT_COLOR, TEXT_COLOR_2, ACTION, BORDER_COLOR_3, AUDIO_PLAYER_HIGHT } from '../styles';


const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;


const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR_2,
  },
  headerImage: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 170,
    width: cellWidth,
    //resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImageText: {
    fontSize: 25,
    color: TEXT_COLOR_2,
  },
  playAllButtonContainer: {
    position: 'absolute',
    flex: 1,
    top: 147,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  playAllButton: {
    backgroundColor: ACTION,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 0.65 * width,
    borderRadius: 9,
  },
  playAllButtonIcon: {
    tintColor: '#ffffff',
    height: 16,
    width: 16,
    marginRight: 10,
    resizeMode: 'contain',
  },
  playAllButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollableContent: {
    paddingTop: 10,
  },
  audioContentInfo: {
    //flexDirection: 'row',
    height: 60,
    // position: 'absolute',
    //top: 50,
    //left: 0,
    //right: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: BORDER_COLOR_3,
    borderBottomWidth: 1,
  },
  audioContentBox: {
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  audioContent: {
    flexDirection: 'row',
  },
  audioContentQuickInfo: {
    flexDirection: 'row',
  },
  audioContentFloor: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floorIcon: {
    marginRight: 10,
    tintColor: TEXT_COLOR,
  },
  floorText: {
    fontSize: 16,
    color: TEXT_COLOR,
  },
  audioContentDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationIcon: {
    marginRight: 10,
    tintColor: TEXT_COLOR,
  },
  durationText: {
    fontSize: 16,
    color: TEXT_COLOR,
  },
  imageTitle: {
    fontStyle: 'italic',
  },
  stickySection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  stickyHeaderTitleText: {
    backgroundColor: 'transparent',
    color: TEXT_COLOR,
    fontWeight: '600',
    fontSize: 17,
  },
  filler: {
    height: AUDIO_PLAYER_HIGHT,
  },
});


class TourstopScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTourStops(songs) {
    var lang = String(I18n.locale);
    var array = [];
    var json = require('../soundInfo/soundInfo.json');
    var array = [];
    var highlightArray = [];
    var maxIndex = 0;
    var indexKeeper = 0;
    for (var i = 0; i < Object.keys(songs.songs).length; i++) {
      if (json[lang][songs.songs[String(i)]].highlight === "1") {
        highlightArray.push({ text: json[lang][songs.songs[String(i)]].name, number: songs.songs[String(i)], thisIndex: indexKeeper, filePath: json[lang][songs.songs[String(i)]].filepath, highlight: json[lang][songs.songs[String(i)]].highlight });
        indexKeeper++;
      }
      maxIndex++;
    }
    for (var i = 0; i < Object.keys(songs.songs).length; i++) {
      if (json[lang][songs.songs[String(i)]].highlight === "0") {
        array.push({ text: json[lang][songs.songs[String(i)]].name, number: songs.songs[String(i)], thisIndex: indexKeeper, filePath: json[lang][songs.songs[String(i)]].filepath, highlight: json[lang][songs.songs[String(i)]].highlight });
        indexKeeper++;
      }
    }


    maxIndex--;
    var finalArray;
    if (highlightArray.length === 0) {
      finalArray = array;
    } else {
      finalArray = highlightArray.concat(array);
    }
    this.state = { tourstops: finalArray, maxIndex: maxIndex }
    return this.state.tourstops.map(tourstops =>
      <TourStopDetails key={tourstops.text} text={tourstops.text} number={tourstops.number} thisIndex={tourstops.thisIndex} addAudioPlayer={() => this.props.screenProps.addAudioPlayer(tourstops.filePath, finalArray, tourstops.thisIndex, maxIndex, tourstops.text, tourstops.number)} array={finalArray} highlight={tourstops.highlight} />
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.headerImage} source={this.props.navigation.state.params.image}>
          <Text style={styles.headerImageText}>
            {this.props.navigation.state.params.title}
          </Text>
        </ImageBackground>

        <View style={styles.playAllButtonContainer}>
          <TouchableOpacity style={styles.playAllButton} onPress={() => this.props.screenProps.addAudioPlayer(this.state.tourstops[0].filePath, this.state.tourstops, 0, this.state.maxIndex, this.state.tourstops[0].text, this.state.tourstops[0].number)}>
            <Image style={styles.playAllButtonIcon} source={require('../Images/PlayButton.png')} />
            <Text style={styles.playAllButtonText}>
              {I18n.t('playAll')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioContentInfo}>
          <View style={styles.audioContentBox}>
            <View style={styles.audioContent}>
              <Image style={styles.floorIcon} source={require('../Images/FloorIcon.png')} />
              <Text style={styles.floorText}>
                {I18n.t('floor')} {this.props.navigation.state.params.floor}
              </Text>
            </View>
            <View style={styles.audioContent}>
              <Image style={styles.durationIcon} source={require('../Images/ClockIcon.png')} />
              <Text style={styles.durationText}>
                {this.props.navigation.state.params.duration} {I18n.t('min')}
              </Text>
            </View>
          </View>
        </View>
        {this.renderTourStops({ songs: this.props.navigation.state.params.songs })}
        <View style={styles.filler} />
      </ScrollView>

    );
  }

}

export default TourstopScreen;
