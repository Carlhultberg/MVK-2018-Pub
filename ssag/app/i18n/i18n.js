import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { strings } from './strings';
import { AsyncStorage } from 'react-native';
import Realm from 'realm';

export const languageRealm = {
  name: 'languageRealm',
  properties: {
    name: { type: 'string' },
  }
};

export const realm = new Realm({ schema: [languageRealm] });

export const languageR = realm.objects('languageRealm');
console.log(languageR.length);

if (languageR.length == 0) {
  realm.write(() => {
    let lang = realm.create('languageRealm', {
      name: 'en',
    });
  });
}

I18n.translations = strings;
I18n.fallbacks = true;
I18n.defaultLocale = `${languageR[0].name}`;
I18n.locale = `${languageR[0].name}`;

export default I18n;