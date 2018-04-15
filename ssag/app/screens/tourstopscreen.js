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

import { OFF_BLACK, OFF_WHITE, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS } from '../styles';

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
    backgroundColor: ACTION,
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
    fontWeight: 'bold',
  },
  scrollableContent: {
    paddingTop: 10,
  },
  audioContentInfo: {
    //flexDirection: 'row',
    backgroundColor: LIGHT_GRAY,
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
    backgroundColor: LIGHT_GRAY,
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  audioContent: {
    backgroundColor: LIGHT_GRAY,
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
    backgroundColor: LIGHT_GRAY,
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
  filler: {
    height: 60,
},
});

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;


class TourstopScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTourStops(songs) {
    var lang = String(I18n.locale);
    var array = [];
    var json = require('../soundInfo/soundInfo.json');
    var array = [];
    var maxIndex = 0;
    for(var i=0;i<Object.keys(songs.songs).length;i++){
      array.push({text: json.language[lang][songs.songs[String(i)]].name, number: json.language[lang][songs.songs[String(i)]].number, thisIndex: i, filePath: json.language[lang][songs.songs[String(i)]].filepath});
      maxIndex++;
    }
    maxIndex--;
    this.state={tourstops:array}
    return this.state.tourstops.map(tourstops =>
       <TourStopDetails key={tourstops.text} text={tourstops.text} number={tourstops.number} thisIndex={tourstops.thisIndex} addAudioPlayer={()=>this.props.screenProps.addAudioPlayer(tourstops.filePath, array, tourstops.thisIndex, maxIndex, tourstops.text, tourstops.number)} array={array}/>
     );
  }

  render() {
    return (
        <ScrollView style={styles.container}>
          <Image
              style={styles.headerImage}
              source={this.props.navigation.state.params.image}/>

          <View style={styles.playAllButtonContainer}>
            <TouchableOpacity
              style={[styles.playAllButton, { width: 0.65 * width }]}
              onPress={() => this.props.screenProps.addAudioPlayer(this.state.tourstops[0].filePath, this.state.tourstops, 0, this.state.maxIndex, this.state.tourstops[0].text, this.state.tourstops[0].number)}>
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
                  {I18n.t('floor')} {this.props.navigation.state.params.floor}
                </Text>
              </View>
              <View style={styles.audioContent}>
                <Image
                  style={styles.durationIcon}
                  source={require('../Images/ClockIcon.png')}
                />
                <Text style={styles.durationText}>
                {this.props.navigation.state.params.duration} {I18n.t('min')} 
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
          {  this.renderTourStops({songs:this.props.navigation.state.params.songs}) }
          <View style={styles.filler}/>
        </ScrollView>

    );
  }

}

export default TourstopScreen;
