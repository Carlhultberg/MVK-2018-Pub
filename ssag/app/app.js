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
      logo: require('./assets/PlayButton.png')
    };
    this.createAudio = this.createAudio.bind(this);
    this.addAudioPlayer = this.addAudioPlayer.bind(this);
    this.changeLogo = this.changeLogo.bind(this);
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  createAudio(newAudio){
    this.setState({ audio: new Player(newAudio) });
  }

  addAudioPlayer(audio){
    this.createAudio(audio);
    this.setState({ bottomScreen: true, logo: require('./assets/PauseButton.png') });
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
          />
        </View>
      )
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
            changeLogo: this.changeLogo
          }}/>
          { this.bottomComponent() }
        </View>
    );
  }
}

export default App;
