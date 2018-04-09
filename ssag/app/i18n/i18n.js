import React, {Component} from 'react';
import I18n from 'react-native-i18n';
import { strings } from './strings';
import { AsyncStorage} from 'react-native';

export function getKey() {
  console.log('1');
  AsyncStorage.getItem('key').then((keyValue) => {
    console.log('2');
    if(keyValue == undefined){
      console.log('3');
      AsyncStorage.setItem('key', 'en');
      I18n.defaultLocale ='en';
      I18n.locale = 'en';
    }else{
      console.log('4')
      console.log(keyValue);
      I18n.defaultLocale = keyValue;
      I18n.locale = keyValue;
    }
  });
}

I18n.translations = strings;
I18n.fallbacks = true;
getKey();

export default I18n;
