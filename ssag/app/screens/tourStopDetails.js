import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { OFF_BLACK, OFF_WHITE, LIGHT_GRAY, HIGHLIGHTS } from '../styles';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height / 11;
//var bgColorHighlight = LIGHT_GRAY;


const s = StyleSheet.create({
  container: {
    height: cellHeight+2,
    width: cellWidth,
  },
  audioListContainer: {
    height: cellHeight,
    width: cellWidth,
    borderBottomWidth: 1,
    borderBottomColor: OFF_WHITE,
    backgroundColor: LIGHT_GRAY,
  },
  highlightContainer: {
    borderRadius: 4,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  textNumber: {
    color: OFF_BLACK, 
    fontSize: 18,
    //marginTop: 8,
    marginLeft: 4,
    marginRight: 4,
    //backgroundColor: bgColorHighlight,
  },
  textName: {
    marginTop: 8,
    fontSize: 18,
    color: OFF_BLACK,
  },
  row: {
    //justifyContent: 'center',
    flexDirection: 'row',
    //height: 60,
    //width: 100,
},
});


class TourStopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.highlighted(this.props.highlight);
  }

  highlighted (h){
    if(h==1){
      this.setState({textColorHighlight: OFF_WHITE});
      this.setState({bgColorHighlight: HIGHLIGHTS});
    }
    else{
      this.setState({textColorHighlight: OFF_BLACK});
    }
  }


  render(){
    return(
      <View style={s.container}>
        <TouchableOpacity onPress={() => this.props.addAudioPlayer()}>
          <View style={s.audioListContainer}>
              <View style={s.row}>
                <View style={[s.highlightContainer, {backgroundColor: this.state.bgColorHighlight }]}>
                  <Text style={[s.textNumber, {color: this.state.textColorHighlight }]}>
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
