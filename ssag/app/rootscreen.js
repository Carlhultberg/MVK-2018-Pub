import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native';

import HighlightScreen from './screens/highlightscreen';
import TourstopScreen from './screens/tourstopscreen';
import TourstopScreenSearch from './screens/tourstopscreenSearch';
import SearchByNumberScreen from './screens/searchByNumberScreen';
import NearMeScreen from './screens/nearMeScreen';
import InfoScreen from './screens/infoScreen';
import Language from './screens/language';
import I18n from './i18n/i18n';


export const BrowserStack = StackNavigator({
  Browser: {
    screen: HighlightScreen,
    navigationOptions:{
      title: I18n.t('storiesScreen_Title'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
  TourstopScreen:{
    screen: TourstopScreen,
    navigationOptions:{
      title: I18n.t('Traditions_shortTitle'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
});
export const NearMeStack = StackNavigator({
  NearMe: {
    screen: NearMeScreen,
    navigationOptions:{
      title: I18n.t('settingsScreen_NearMeHeader'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
});
export const InfoStack = StackNavigator({
  Info: {
    screen: InfoScreen,
    navigationOptions:{
      title: I18n.t('museumScreen_Title'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
  Language: {
    screen: Language,
    navigationOptions:{
      title: I18n.t('settingsScreen_Title'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
});
export const SearchByNumberStack = StackNavigator({
  Browser: {
    screen: SearchByNumberScreen,
    navigationOptions:{
      title: I18n.t('searchScreen_Title'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
  TourstopScreenSearch:{
    screen: TourstopScreenSearch,
    navigationOptions:{
      title: I18n.t('Traditions_shortTitle'),
      headerTitleStyle:{alignSelf: 'center'},
    },
  },
});

export const Tabs = TabNavigator({
  NearMe:{
    screen: NearMeStack,
    navigationOptions: {
      tabBarLabel: I18n.t('nearMeScreen_Title'),
      tabBarIcon: ({ tintcolor }) => (<Image source={require('./assets/nearTab.png')}/>)
    },
  },
  Browser:{
    screen: BrowserStack,
    navigationOptions: {
      tabBarLabel: I18n.t('storiesScreen_Title'),
      tabBarIcon: ({ tintcolor }) => (<Image source={require('./assets/storiesTab.png')}/>),
    },
  },
  Search:{
    screen: SearchByNumberStack,
    navigationOptions: {
      tabBarLabel: I18n.t('searchScreen_Title'),
      tabBarIcon: ({ tintcolor }) => (<Image source={require('./assets/searchTab.png')}/>),
    },
  },
  Info:{
    screen: InfoStack,
    navigationOptions: {
      tabBarLabel: I18n.t('museumScreen_Title'),
      tabBarIcon: ({ tintcolor }) => (<Image source={require('./assets/museumTab.png')}/>),
    },
  },
},{
  tabBarPosition: 'bottom',
  tabBarOptions : {
    style: {
      backgroundColor: '#000000',
      height: 60,
    }
  }
});
