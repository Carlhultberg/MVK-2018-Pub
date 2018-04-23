import React, { Component } from 'react';
import { TEXT_COLOR, BORDER_COLOR_3, BACKGROUND_COLOR_2, HIGHLIGHTS, HIGHLIGHTS_TEXT, } from '../styles';
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
    backgroundColor: BACKGROUND_COLOR_2,
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
});


class TourStopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <TouchableOpacity onPress={() => this.props.addAudioPlayer()}>
          <View style={s.audioListContainer}>
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
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default TourStopDetails;