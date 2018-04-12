import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
import { Tabs } from './rootscreen';
import { Player, MediaStates } from 'react-native-audio-toolkit';
import SplashScreen from 'react-native-splash-screen';
import RNRestart from 'react-native-restart';
import AudioPlayer from './screens/audioPlayer';

class App extends Component{
  constructor() {
    super()
    this.state = {
      audio: '',
      bottomScreen: false,
      logo: require('./assets/PlayButton.png'),
      array: null,
      index: 0,
      maxIndex: 0,
      audioName: '',
      audioNumber: '',
    };
    this.createAudio = this.createAudio.bind(this);
    this.addAudioPlayer = this.addAudioPlayer.bind(this);
    this.changeLogo = this.changeLogo.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.previousSong = this.previousSong.bind(this);
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  createAudio(newAudio){
    this.setState({ audio: new Player(newAudio,{continuesToPlayInBackground:true}).prepare().on('ended', () =>{this.nextSong()})});
  }

  addAudioPlayer(path, array, index, maxIndex, text, number){
    if(this.state.audio !== ''){
      this.state.audio.destroy();
    }
    this.createAudio(path);
    this.setState({ bottomScreen: true, logo: require('./assets/PauseButton.png'), array: array, index: index, maxIndex: maxIndex, audioName: text, audioNumber: number});
    setTimeout(()=>this.state.audio.play(),20);
  }


  changeLogo(){
    if(this.state.logo == require('./assets/PauseButton.png')){
      this.setState({ logo: require('./assets/PlayButton.png') });
    }else{
      this.setState({ logo: require('./assets/PauseButton.png') });
    }
  }

  bottomComponent(){
    if(this.state.bottomScreen){
      return (
        <View style={{ height: 60, position: 'absolute', left: 0, right: 0, bottom: 60 }}>
          <AudioPlayer
            audio = {this.state.audio}
            logo = {this.state.logo}
            changeLogo = {this.changeLogo}
            nextSong = {this.nextSong}
            previousSong = {this.previousSong}
            audioName = {this.state.audioName}
            audioNumber = {this.state.audioNumber}
          />
        </View>
      )
    }
  }

  nextSong(){
    if(this.state.index==this.state.maxIndex){
      this.state.audio.destroy();
      this.setState({ bottomScreen: false, audio: ''  });
    }else{
      let newFilePath = this.state.array[String(this.state.index+1)].filePath;
      let audioName = this.state.array[String(this.state.index+1)].text;
      let audioNumber = this.state.array[String(this.state.index+1)].number;
      this.addAudioPlayer(newFilePath, this.state.array, this.state.index+1, this.state.maxIndex, audioName, audioNumber);
    }
  }

  previousSong(){
    if(this.state.index==0){
      this.state.audio.destroy();
      this.setState({ bottomScreen: false, audio: ''  });
    }else{
      let newFilePath = this.state.array[String(this.state.index-1)].filePath;
      let audioName = this.state.array[String(this.state.index-1)].text;
      let audioNumber = this.state.array[String(this.state.index-1)].number;
      this.addAudioPlayer(newFilePath, this.state.array, this.state.index-1, this.state.maxIndex, audioName, audioNumber);
    }
  }


  render(){
    return (
      <View style={{flex: 1}}>
        <Tabs
          screenProps = {{
            currentAudio: this.state.audio,
            bottomScreen: this.state.bottomScreen,
            logo: this.state.logo,
            createAudio: this.createAudio,
            addAudioPlayer: this.addAudioPlayer,
            changeLogo: this.changeLogo,
            nextSong: this.nextSong,
            previousSong: this.previousSong,
          }}/>
          { this.bottomComponent() }
        </View>
    );
  }
}

export default App;
