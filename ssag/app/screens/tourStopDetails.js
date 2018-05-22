// Copyright(c) 2018 Gustav Kjellberg, Gustaf Lidfeldt, Diar Sabri, Maria Lindblad,
// Lars Lundin, Carl Hultberg, Bruhan Hashi, Sebastian Franzén, Jesper Öberg,
// Björn Aurell Hansson, Tommy Samuelsson. gustav.kjellberg@hotmail.com

import React, { Component } from 'react';
import { TEXT_COLOR, BORDER_COLOR_3, BACKGROUND_COLOR_2, HIGHLIGHTS, HIGHLIGHTS_TEXT, SELECTED } from '../styles';
import I18n from '../i18n/i18n';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 11;

const s = StyleSheet.create({
  audioListContainer: {
    height: 60,
    width: cellWidth,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR_3,
    //backgroundColor: BACKGROUND_COLOR_2,
  },
  highlightContainer: {
    borderRadius: 4,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  textNumber: {
    color: TEXT_COLOR,
    fontSize: 18,
    marginLeft: 4,
    marginRight: 4,
  },
  textName: {
    marginTop: 8,
    fontSize: 18,
    color: TEXT_COLOR,
  },
  row: {
    flexDirection: 'row',
  },
  tourStopContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  duration: {
    marginTop: 8,
    fontSize: 18,
    color: TEXT_COLOR,
    marginRight: 5,
  },
});


class TourStopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: BACKGROUND_COLOR_2,
      min: Math.floor(this.props.duration / 60),
      sec: this.props.duration % 60,
    };
  }


  renderTourStopContent(){
    return(
      <View style={s.tourStopContainer}>
        <View style={s.row}>
          <View style={[s.highlightContainer, { backgroundColor: this.state.bgColorHighlight }]}>
            <Text style={[s.textNumber, { color: this.state.textColorHighlight }]}>
              {this.props.number}
            </Text>
          </View>
          <Text style={s.textName}>
            {this.props.text}
          </Text>
        </View>
        <View>
          <Text style={s.duration}>
            {this.state.min} {I18n.t('min')} {this.state.sec} {I18n.t('sek')}
          </Text>
        </View>
      </View>
    )
  }
  renderTourStop(){
    if(this.props.currentlyPlaying == this.props.number){
      return(
        <View style={[s.audioListContainer, { backgroundColor: SELECTED }]}>
          { this.renderTourStopContent() }
        </View>
      )
    }else{
      return(
        <View style={[s.audioListContainer, { backgroundColor: BACKGROUND_COLOR_2 }]}>
          { this.renderTourStopContent() }
        </View>
      )
    }
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
      this.setState({ textColorHighlight: TEXT_COLOR });
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer() }>
          { this.renderTourStop() }
        </TouchableOpacity>
      </View>
    );
  }
}
export default TourStopDetails;
