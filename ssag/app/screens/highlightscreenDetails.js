import React, { Component } from 'react';
import I18n from '../i18n/i18n';

import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native';

import {TEXT_COLOR_2, HIGHLIGHTS_TEXT, BACKGROUND_COLOR, HIGHLIGHTS, BORDER_COLOR_3 } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 4;

const styles = StyleSheet.create({

  container: {
    height: 170,
    width: cellWidth,
  },
  highlightContainer: {
    borderRadius: 4,
    marginLeft: 16,
    marginBottom: 4,
  },
  image: {
    height: 170,
    width: cellWidth,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: BORDER_COLOR_3,
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
  textTitle: {
    marginLeft: 4,
    marginRight: 4,
    fontSize: 19,
    //fontWeight: 'bold',
    color: TEXT_COLOR_2
  },
  textDuration: {
    color: TEXT_COLOR_2,
    paddingRight:5
  },
  textFloor: {
    color: TEXT_COLOR_2,
    paddingRight:5
  },
  timeBox: {
    flexDirection: 'row',
  },
});

class HighlightScreenDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  componentDidMount(){
    this.highlighted(this.props.floor);
  }

  highlighted (h){
    if(h===''){
      this.setState({textColorHighlight: HIGHLIGHTS_TEXT});
      this.setState({bgColorHighlight: HIGHLIGHTS});
    }
    else{
      this.setState({textColorHighlight: TEXT_COLOR_2});
    }
  }

  addFloor(){
    if(this.props.floor){
      return(
        <View style={styles.timeBox}>
          <Image style={styles.floorIcon} source={require('../Images/FloorIcon.png')}/>
          <Text style={styles.textFloor}>
            {I18n.t('floor')} {this.props.floor}
          </Text>
        </View>
      )
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.learnMore(this.props.title, this.props.image, this.props.duration, this.props.floor, this.props.songs)}>
          <ImageBackground style={styles.image} source={this.props.image}>
            <View style={styles.textBox}>
              <View style={[styles.highlightContainer, {backgroundColor: this.state.bgColorHighlight }]}>
                <Text style={[styles.textTitle, {color: this.state.textColorHighlight}]}>
                  {this.props.title}
                </Text>
              </View>
              <View style={styles.timeBox}>
                <Image style={styles.durationIcon} source={require('../Images/ClockIcon.png')}/>
                <Text style={styles.textDuration}>
                  {this.props.duration}
                </Text>
                { this.addFloor() }
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HighlightScreenDetails;
