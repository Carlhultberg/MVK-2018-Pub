// Copyright(c) 2018 Gustav Kjellberg, Gustaf Lidfeldt, Diar Sabri, Maria Lindblad,
// Lars Lundin, Carl Hultberg, Bruhan Hashi, Sebastian Franzén, Jesper Öberg,
// Björn Aurell Hansson, Tommy Samuelsson. gustav.kjellberg@hotmail.com

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, TouchableHighlight, Dimensions } from 'react-native';
import AudioPlayer from './audioPlayer';
import I18n from '../i18n/i18n';
import { HEADER_TEXT_COLOR, HEADER_BACKGROUND_COLOR, BACKGROUND_COLOR, TEXT_COLOR, BORDER_COLOR_1, BUTTON_ON_PRESS_COLOR_1, AUDIO_PLAYER_HIGHT } from '../styles';



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
        if (this.state.text1 === ' ') {
            this.setState({ text1: digit });
        } else if (this.state.text2 === ' ') {
            this.setState({ text2: digit });
        } else if (this.state.text3 === ' ') {
            this.setState({ text3: digit })
            this.searchForTrack(this.state.text1 + this.state.text2 + digit);
        }
    }

    learnMore = (title, image, duration, floor, songs) => {
        this.props.navigation.navigate('TourstopScreenSearch', { title, image, duration, floor, songs });
    }

    renderTourStop(theme) {
        var json = require('../soundInfo/exhibitionInfo.json');
        var lang = String(I18n.locale);
        var json_length = Object.keys(json).length;
        var required;
        if (json[lang][String(theme)]["image"] == "0") {
            required = require('../Images/highlights.png');
        } else if (json[lang][String(theme)]["image"] == "1") {
            required = require('../Images/highlights.png');
        } else if (json[lang][String(theme)]["image"] == "2") {
            required = require('../Images/highlights.png');
        }
        this.learnMore(json[lang][String(theme)]["name"], required, json[lang][String(theme)]["duration"], json[lang][String(theme)]["floor"], json[lang][String(theme)]["sounds"]);
    }

    searchForTrack(searchString) {
        var jsonExh = require('../soundInfo/exhibitionInfo.json');
        var json = require('../soundInfo/soundInfo.json');
        var lang = String(I18n.locale);
        var array = [];
        var maxIndex = -1;
        var startIndex = 0;
        var track = json[lang][String(searchString)];
        if (typeof track === 'undefined') {
            this.setState({ headerText: I18n.t('tryAgain') });
            this.resetHeaderWithDelay();
            this.clearDigitWithDelay();
        } else {
            var theme = json[lang][String(searchString)].theme;
            var exhibitionAudios = jsonExh[lang][String(theme)].sounds;
            var json_length = Object.keys(exhibitionAudios).length;
            for (var i = 0; i < json_length; i++) {
                if (String(exhibitionAudios[String(i)]) == searchString) {
                    startIndex = i;
                }
                array.push({text: json[lang][String(exhibitionAudios[String(i)])].name, number: String(exhibitionAudios[String(i)]), thisIndex: i, filePath: json[lang][String(exhibitionAudios[String(i)])].filepath, highlight: json[lang][String(exhibitionAudios[String(i)])].highlight});
                maxIndex++;
              }
            this.props.screenProps.addAudioPlayer(track.filepath, array, startIndex, maxIndex, track.name, searchString, track.highlight, track.duration);
            this.clearDigitWithDelay();
            this.renderTourStop(theme);
        }
    }

    resetHeaderWithDelay() {
        setTimeout(() => {
            this.setState({ headerText: I18n.t('searchScreen_Title') });
        }, 1500)
    }

    clearDigitWithDelay() {
        setTimeout(() => {
            this.clearDigit();
        }, 1500)
    }

    clearDigit() {
        this.setState({ text3: ' ' });
        this.setState({ text2: ' ' });
        this.setState({ text1: ' ' });
    }

    removeDigit() {
        if (!(this.state.text3 === ' ')) {
            this.setState({ text3: ' ' });
        } else if (!(this.state.text2 === ' ')) {
            this.setState({ text2: ' ' });
        } else if (!(this.state.text1 === ' ')) {
            this.setState({ text1: ' ' });
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
                <View style={s.inputRow}>
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

                <View style={s.buttonRow}>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("1"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            1
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("2"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            2
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("3"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            3
                      </Text>
                    </TouchableHighlight>
                </View>

                <View style={s.buttonRow}>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("4"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            4
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("5"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            5
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("6"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            6
                        </Text>
                    </TouchableHighlight>
                </View>


                <View style={s.buttonRow}>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("7"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            7
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("8"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            8
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("9"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            9
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={s.buttonRow}>
                    <View style={[s.filler]} />
                    <TouchableHighlight underlayColor={BUTTON_ON_PRESS_COLOR_1} onPress={() => { this.addDigit("0"); }} style={s.buttonContainer}>
                        <Text style={s.buttonText}>
                            0
                        </Text>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => { this.removeDigit(); }} style={s.buttonNoContainer}>
                        <Image source={require('../assets/DeleteButton.png')} style={s.deleteButton} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: AUDIO_PLAYER_HIGHT }} />
            </View>
        );
    }
}

const { height } = Dimensions.get('window');
const cellHeight = height / 10;

const s = StyleSheet.create({

    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: HEADER_TEXT_COLOR,
    },
    headerBorder: {
        width: "100%",
        height: 56,
        backgroundColor: HEADER_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 4,
    },
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },
    input: {
        width: (cellHeight/2)+8,
        height: (cellHeight/2)+8,
        color: TEXT_COLOR,
        fontSize: cellHeight/2,
        textAlign: 'center',
        margin: 10,
        borderBottomWidth: 1,
    },
    buttonContainer: {
        height: cellHeight,
        width: cellHeight,
        justifyContent: 'center',
        borderRadius: cellHeight/2,
        borderColor: BORDER_COLOR_1,
        borderWidth: 1,
        margin: 8,
    },
    buttonNoContainer: {
        height: cellHeight,
        width: cellHeight,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: TEXT_COLOR,
        fontSize: cellHeight/2,
        textAlign: 'center',
    },
    deleteButton: {
        height: cellHeight/2,
        width: cellHeight/2,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    inputRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: cellHeight/2
    },
    buttonRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    notDigitRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    filler: {
        width: cellHeight,
        height: cellHeight,
        margin: 10,
    },
});
