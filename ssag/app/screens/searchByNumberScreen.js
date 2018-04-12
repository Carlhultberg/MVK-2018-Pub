import React, { Component } from  'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image,} from 'react-native';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
//import App from "../App";

export default class SearchByNumberScreen extends Component {


    constructor(props) {
        super(props);

        this.state = {
            text1: ' ',
            text2: ' ',
            text3: ' ',
<<<<<<< HEAD
            searchString: ' ',
            headerText: I18n.t('searchScreen_Title'),
=======
            searchString: ' '
>>>>>>> d88fe99ef9975ebb995748771142c7e863c5b233
        };
    }

    addDigit(digit) {
        if (this.state.text1 === ' '){
            this.setState({text1: digit});
        }else if (this.state.text2 === ' ') {
            this.setState({text2: digit});
        }else if (this.state.text3 === ' '){
            this.setState({text3: digit})
            this.setState({searchString: this.state.text1 + this.state.text2 + digit})
            this.searchForTrack(this.state.text1 + this.state.text2 + digit);
            //this.searchForTrack(readyToSearch());

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
        var json = require('../soundInfo/soundInfo.json');
        var lang = 'sv';
        var track = json.language[lang][String(searchString)];
        console.log(track);
        console.log("hej");
        if(typeof track === 'undefined'){
            this.setState({headerText: I18n.t('tryAgain')});
            this.resetHeaderWithDelay();
            this.clearDigitWithDelay();
        }else{
            var theme = track.theme;
            this.props.screenProps.addAudioPlayer(track.filepath, {}, 0,0);
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
<<<<<<< HEAD
            this.clearDigit(); 
          }, 1500)
=======
            this.clearDigit();
          }, 1000)
>>>>>>> d88fe99ef9975ebb995748771142c7e863c5b233
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

                <Text style={s.textHeader}>
                    {this.state.headerText}
                </Text>


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
                  <TouchableOpacity onPress={() => { this.addDigit("1"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          1
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.addDigit("2"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          2
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.addDigit("3"); }} style={s.buttonContainer}>
                      <Text style={s.buttonText}>
                          3
                      </Text>
                  </TouchableOpacity>
                </View>


                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>
                    <TouchableOpacity onPress={() => { this.addDigit("4"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.addDigit("5"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.addDigit("6"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            6
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>
                    <TouchableOpacity onPress={() => { this.addDigit("7"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            7
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.addDigit("8"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.addDigit("9"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            9
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={[s.notDigitRow,  { flexDirection: 'row' } ]}>
                    <View style={[s.filler]} />
                    <TouchableOpacity onPress={() => { this.addDigit("0"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            0
                        </Text>
                    </TouchableOpacity>
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
        fontSize: 25,
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 40,
        height: 50,
        color: '#000000',
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
        borderColor: '#808080',
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
        color: '#000000',
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
        backgroundColor: '#F7F7F7'
    },

    mediaContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
