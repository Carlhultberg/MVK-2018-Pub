import React, { Component } from  'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, } from 'react-native';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
//import App from "../App";

export default class SearchByNumberScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text1: '_',
            text2: '_',
            text3: '_',
            searchString: '',
        };
    }

    addDigit(digit) {
        if (this.state.text1 === "_"){
            this.setState({text1: digit});
        }else if (this.state.text2 === "_") {
            this.setState({text2: digit});
        }else if (this.state.text3 === "_"){
            this.setState({text3: digit})
            this.setState({searchString: this.state.text1 + this.state.text2 + digit})
        }
    }

    removeDigit() {
        if (!(this.state.text3 === '_')){
            this.setState({text3: '_'});
        }else if (!(this.state.text2 === '_')) {
            this.setState({text2: '_'});
        }else if (!(this.state.text1 === '_')){
            this.setState({text1: '_'});
        }
    }

    readyToSearch() {
        return this.state.searchString;
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

    render() {
        return (
          <View style={{flex: 1}}>
            <View style={s.container}>
                <Text style={s.input}>
                    {this.state.searchString}
                </Text>
                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>
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

                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>

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


                <View style={[s.digitRow,  { flexDirection: 'row' } ]}>

                    <TouchableOpacity onPress={() => { this.addDigit("p"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            p
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.addDigit("0"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.removeDigit(); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            B
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            { this.bottomComponent() }
          </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7acbd9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    buttonContainer:{
        backgroundColor: '#74747a',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 30,
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 50,
        textAlign: 'center',
    },
    digitRow: {
        flexDirection: 'row',
        //height: 75,
    },

});
