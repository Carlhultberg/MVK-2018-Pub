import React, { Component } from  'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image, TouchableHighlight} from 'react-native';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
import { OFF_BLACK, OFF_WHITE, SELECTED, NAV_BAR_BACKGROUND, NAV_BAR_TEXT, BORDERCOLOR } from '../styles';
//import App from "../App";

export default class SearchByNumberScreen extends Component {


    constructor(props) {
        super(props);

        this.state = {
            text1: ' ',
            text2: ' ',
            text3: ' ',
            searchString: ' ',
            headerText: I18n.t('searchScreen_Title'),
        };
    }

    addDigit(digit) {
        if (this.state.text1 === ' '){
            this.setState({text1: digit});
        }else if (this.state.text2 === ' ') {
            this.setState({text2: digit});
        }else if (this.state.text3 === ' '){
            this.setState({text3: digit})
            //this.setState({searchString: this.state.text1 + this.state.text2 + digit})
            this.searchForTrack(this.state.text1 + this.state.text2 + digit);

        }
    }

    learnMore = (title,image,duration,floor,songs) => {
      this.props.navigation.navigate('TourstopScreenSearch', { title,image,duration,floor,songs});
    }

    renderTourStop(theme) {
      var json = require('../soundInfo/exhibitionInfo.json');
      var json_length = Object.keys(json).length;
      var required;
      if(json[String(theme)]["image"] == "0"){
        required = require('../Images/stockholm1.png');
      }else if(json[String(theme)]["image"] == "1"){
        required = require('../Images/oldStockholm3.png');
      }else if(json[String(theme)]["image"] == "2"){
        required = require('../Images/stockholm2.png');
      }
      this.learnMore(json[String(theme)]["name"],required,json[String(theme)]["duration"],json[String(theme)]["floor"],json[String(theme)]["sounds"]);
    }

    searchForTrack(searchString){
        var jsonExh = require('../soundInfo/exhibitionInfo.json');
        var json = require('../soundInfo/soundInfo.json');
        var lang = String(I18n.locale);
        var array = [];
        var maxIndex = -1;
        var track = json.language[lang][String(searchString)];
        if(typeof track === 'undefined'){
            this.setState({headerText: I18n.t('tryAgain')});
            this.resetHeaderWithDelay();
            this.clearDigitWithDelay();
        }else{
          var theme = json.language[lang][String(searchString)].theme;
          var exhibitionAudios = jsonExh[String(theme)].sounds;
          var json_length = Object.keys(exhibitionAudios).length;
          for(var i=0;i<json_length;i++){
            array.push({text: json.language[lang][String(exhibitionAudios[String(i)])].name, number: json.language[lang][String(exhibitionAudios[String(i)])].number, thisIndex: i, filePath: json.language[lang][String(exhibitionAudios[String(i)])].filepath});
            maxIndex++;
          }
            this.props.screenProps.addAudioPlayer(track.filepath, array, 0, maxIndex, track.name, track.number);
            this.clearDigitWithDelay();
            this.renderTourStop(theme);
        }

    }



    resetHeaderWithDelay(){
        setTimeout(() => {
            this.setState({headerText: I18n.t('searchScreen_Title')});
          }, 1500)
    }

    clearDigitWithDelay(){
        setTimeout(() => {
            this.clearDigit();
          }, 1500)
    }

    clearDigit() {
        this.setState({text3: ' '});
        this.setState({text2: ' '});
        this.setState({text1: ' '});
    }

    removeDigit() {
        if (!(this.state.text3 === ' ')){
            this.setState({text3: ' '});
        }else if (!(this.state.text2 === ' ')) {
            this.setState({text2: ' '});
        }else if (!(this.state.text1 === ' ')){
            this.setState({text1: ' '});
        }
    }

    readyToSearch() {
        return this.state.searchString;
    }


    render() {
        return (
            <View style={s.container}>
                <View style={s.headerBorder}>
                    <Text style={s.textHeader}>
                        {this.state.headerText}
                    </Text>
                </View>

                <View style={[s.digitRow,  { flexDirection: 'row' }, {marginBottom: 30} ]}>
                  <Text style={s.input}>
                      {this.state.text1}
                  </Text>
                  <Text style={s.input}>
                      {this.state.text2}
                  </Text>
                  <Text style={s.input}>
                      {this.state.text3}
                  </Text>
                </View>

                <View style={[s.digitRow,  { flexDirection: 'row' }]}>
                  <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("1"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          1
                      </Text>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("2"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          2
                      </Text>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("3"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          3
                      </Text>
                  </TouchableHighlight>
                </View>


                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("4"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            4
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("5"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            5
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("6"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            6
                        </Text>
                    </TouchableHighlight>
                </View>


                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("7"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            7
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("8"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            8
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("9"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            9
                        </Text>
                    </TouchableHighlight>
                </View>


                <View style={[s.notDigitRow,  { flexDirection: 'row' } ]}>
                    <View style={[s.filler]} />
                    <TouchableHighlight underlayColor={SELECTED} onPress={() => { this.addDigit("0"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            0
                        </Text>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => { this.removeDigit(); }} style={s.buttonNoContainer}>
                        <Image source={require('../assets/DeleteButton.png')} style={s.deleteButton} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({

    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: NAV_BAR_TEXT,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    headerBorder: {
        width: 450,
        height: 56,
        backgroundColor: NAV_BAR_BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 2,
    },

    container: {
        flex: 1,
        backgroundColor: OFF_WHITE,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 40,
        height: 50,
        color: OFF_BLACK,
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        borderBottomWidth: 1,
    },

    buttonContainer:{
        height: 70,
        width: 70,
        justifyContent: 'center',
        borderRadius: 35,
        borderColor: BORDERCOLOR,
        borderWidth: 1,
        margin: 8,
    },

    buttonNoContainer:{
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    buttonText:{
        color: OFF_BLACK,
        fontSize: 35,
        textAlign: 'center',
    },
    deleteButton: {
        height: 25,
        width: 35,
        resizeMode: 'contain',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    digitRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        //height: 60,
        //width: 100,
    },

    notDigitRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        //height: 60,
        //width: 100,
    },

    filler: {
        width: 70,
        height: 70,
        margin: 10,
        backgroundColor: OFF_WHITE,
    },
    
});
