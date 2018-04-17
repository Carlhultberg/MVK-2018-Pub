import React, {Component} from 'react';
import I18n from '../i18n/i18n';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width;
const cellHeight = height * 2/3 ;
const buttonHeight = height * 1/18;

import { OFF_BLACK, OFF_WHITE, ACTION, LIGHT_GRAY, NAV_BAR_TEXT, HIGHLIGHTS, SELECTED, GRAY } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OFF_WHITE,
  },

  button: {
    height: 50,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_GRAY,
  },
  dropDown: {
    height: 50,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: LIGHT_GRAY,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    color: OFF_BLACK
  },
  dropDownText:{
    fontSize: 18,
    color: OFF_BLACK
  },
  image:{
    width: 50,
    height:50,
    //tintColor: OFF_BLACK
  },
  inBetween:{
    height: 4,
  },
});
class AmenitiesScreenDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      string: this.props.string,
      floors: this.props.floors,
      dropDown: this.props.dropDown,
    };
  }

  renderFloors(){
    var array = [];
    for(var i=0;i<Object.keys(this.state.floors).length;i++){
      array.push({floorNum: this.state.floors[String(i)]});
    }
    return array.map(floor =>
       <Text key={floor.floorNum}>{floor.floorNum}  </Text>
     );
  }


  render(){
    if(this.state.dropDown){
      return(
        <View>
          <TouchableOpacity onPress = {() => this.setState({dropDown: false})}>
            <View style={styles.button}>
              <Text style={styles.text}>
                {I18n.t(this.state.string)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.dropDown}>
            <Text style={styles.dropDownText}>
              {I18n.t('floor')} {this.renderFloors()}
            </Text>
          </View>
          <View style={styles.inBetween}/>
        </View>
      );
    }else{
      return(
        <TouchableOpacity onPress = {() => this.setState({dropDown: true})}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {I18n.t(this.state.string)}
            </Text>
          </View>
          <View style={styles.inBetween}/>
        </TouchableOpacity>
      );
    }
  }
}

export default AmenitiesScreenDetails;
