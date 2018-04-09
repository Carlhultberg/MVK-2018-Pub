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
} from 'react-native';

import { OFF_BLACK, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS } from '../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width,
  },
  headerImage: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 167,
    width: cellWidth,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 147,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
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
    backgroundColor: '#E52484',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
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
    fontWeight: '600',
  },
  scrollableContent: {
    paddingTop: 10,
  },
  audioContentInfo: {
    //flexDirection: 'row',
    backgroundColor: '#EDEDED',
    height: 60,
    // position: 'absolute',
    //top: 50,
    //left: 0,
    //right: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  audioContentBox: {
    backgroundColor: '#EDEDED',
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  audioContent: {
    backgroundColor: '#EDEDED',
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
    tintColor: OFF_BLACK,
  },
  floorText: {
    fontSize: 16,
    color: OFF_BLACK,
  },
  audioContentDuration: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationIcon: {
    backgroundColor: '#EDEDED',
    marginRight: 10,
    tintColor: OFF_BLACK,
  },
  durationText: {
    backgroundColor: '#EDEDED',
    fontSize: 16,
    color: OFF_BLACK,
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
    color: OFF_BLACK,
    fontWeight: '600',
    fontSize: 17,
  },
});

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;


class TourstopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tourstops: [
      {text: "Audio1", audio: 'sampleaudio.mp3'},
      {text: "Audio2", audio: 'sampleaudio.mp3'},
      {text: "Audio3", audio: 'sampleaudio.mp3'},
      {text: "Audio4", audio: 'sampleaudio.mp3'},
      {text: "Audio5", audio: 'sampleaudio.mp3'},
      {text: "Audio6", audio: 'sampleaudio.mp3'},
      {text: "Audio7", audio: 'sampleaudio.mp3'},
      {text: "Audio8", audio: 'sampleaudio.mp3'},
      {text: "Audio9", audio: 'sampleaudio.mp3'},
      {text: "Audio10", audio: 'sampleaudio.mp3'},
      {text: "Audio11", audio: 'sampleaudio.mp3'},
      {text: "Audio12", audio: 'sampleaudio.mp3'},
      {text: "Audio13", audio: 'sampleaudio.mp3'},
      {text: "Audio14", audio: 'sampleaudio.mp3'},
      {text: "Audio15", audio: 'sampleaudio.mp3'},
      {text: "Audio16", audio: 'sampleaudio.mp3'}] };
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

  renderTourStops() {
    return this.state.tourstops.map(tourstops =>
      <TourStopDetails key={tourstops.text} text={tourstops.text} audio={tourstops.audio} addAudioPlayer={() => this.props.screenProps.addAudioPlayer(tourstops.audio)}/>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Image
              style={styles.headerImage}
              source={require('../Images/stockholm1.png')}/>

          <View style={styles.playAllButtonContainer}>
            <TouchableOpacity
              style={[styles.playAllButton, { width: 0.65 * width }]}
              onPress={() => this.props.screenProps.addAudioPlayer()}>
              <Image
                style={styles.playAllButtonIcon}
                source={require('../Images/PlayButton.png')}/>
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
                  {I18n.t('floor')}
                </Text>
              </View>
              <View style={styles.audioContent}>
                <Image
                  style={styles.durationIcon}
                  source={require('../Images/ClockIcon.png')}
                />
                <Text style={styles.durationText}>
                  5 {I18n.t('min')}
                </Text>
              </View>
            </View>
          </View>
          <View style={{
              height: 2,
              width: cellWidth,
              backgroundColor: '#0000',
                }}>
          </View>
          { this.renderTourStops() }
        </ScrollView>
        { this.bottomComponent() }
      </View>

    );
  }

}

export default TourstopScreen;
