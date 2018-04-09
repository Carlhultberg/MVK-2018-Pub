import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
import { Tabs } from './rootscreen';
import { Player, MediaStates } from 'react-native-audio-toolkit';
import SplashScreen from 'react-native-splash-screen';
import RNRestart from 'react-native-restart';

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


  render(){
    return (
      <Tabs
        screenProps = {{
          currentAudio: this.state.audio,
          bottomScreen: this.state.bottomScreen,
          logo: this.state.logo,
          createAudio: this.createAudio,
          addAudioPlayer: this.addAudioPlayer,
          changeLogo: this.changeLogo
        }}/>
    );
  }
}

export default App;
