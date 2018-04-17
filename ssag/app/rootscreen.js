import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Image, View} from 'react-native';

import HighlightScreen from './screens/highlightscreen';
import TourstopScreen from './screens/tourstopscreen';
import SearchByNumberScreen from './screens/searchByNumberScreen';
import NearMeScreen from './screens/nearMeScreen';
import InfoScreen from './screens/infoScreen';
import Language from './screens/language';
import AboutApp from './screens/aboutApp';
import AboutMuseum from './screens/aboutMuseum';
import AmenitiesScreen from './screens/amenitiesScreen';
import I18n from './i18n/i18n';
import { OFF_BLACK, OFF_WHITE, SELECTED, NAV_BAR_BACKGROUND, NAV_BAR_TEXT, BORDERCOLOR } from './styles';


export const BrowserStack = StackNavigator({
  Browser: {
    screen: HighlightScreen,
    navigationOptions:{
      title: I18n.t('storiesScreen_Title'),
      headerTitleStyle:{textAlign: 'center',
        flexGrow: 1
        },

    },
  },
  TourstopScreen:{
    screen: TourstopScreen,
    navigationOptions:{
      title: I18n.t('storiesScreen_Title'),
      headerTitleStyle:{alignSelf: 'center',
          textAlign: 'center',
          flexGrow: 1
        },
        headerRight: (<View />)
    },
  },
});
export const NearMeStack = StackNavigator({
  NearMe: {
    screen: NearMeScreen,
    navigationOptions:{
      title: I18n.t('settingsScreen_NearMeHeader'),
      headerTitleStyle:{
        textAlign: 'center',
        flexGrow: 1
      },

    },
  },
});
export const InfoStack = StackNavigator({
  Info: {
    screen: InfoScreen,
    navigationOptions:{
      title: I18n.t('museumScreen_Title'),
      headerTitleStyle:{textAlign: 'center',
      flexGrow: 1
      },

    },
  },
  Language: {
    screen: Language,
    navigationOptions:{
      title: I18n.t('settingsScreen_Title'),
      headerTitleStyle:{alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1
      },
      headerRight: (<View />)
    },
  },
  AboutApp: {
    screen: AboutApp,
    navigationOptions:{
      title: I18n.t('aboutTheAppScreen_Title'),
      headerTitleStyle:{alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1
      },
      headerRight: (<View />)
    },
  },
  AboutMuseum: {
    screen: AboutMuseum,
    navigationOptions:{
      title: I18n.t('museumScreen_ListItem1Label'),
      headerTitleStyle:{alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1
      },
      headerRight: (<View />)
    },
  },
  AmenitiesScreen: {
    screen: AmenitiesScreen,
    navigationOptions:{
      title: I18n.t('amenitiesScreen_Title'),
      headerTitleStyle:{alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1
      },
      headerRight: (<View />)
    },
  },
});
export const SearchByNumberStack = StackNavigator({
  SearchByNumberScreen: {
    screen: SearchByNumberScreen,
    navigationOptions:{
      header: null,
    },
  },
  TourstopScreenSearch:{
    screen: TourstopScreen,
    navigationOptions:{
      title: I18n.t('storiesScreen_Title'),
      headerTitleStyle:{alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1
      },
      headerRight: (<View />)
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
  swipeEnabled: false,
  animationEnabled: false,
  initialRouteName: 'Browser',
  tabBarOptions: {
    //showLabel: false,
    showIcon: true,
    upperCaseLabel: false,
    indicatorStyle:  {
      backgroundColor: '#000000',
    },
    style: {
      backgroundColor: '#000000',
      height: 60,
    },
    labelStyle: {
      fontSize: 12,
    },
    iconStyle: {
      height: 25,
      width: 25,
    },
  }
});
