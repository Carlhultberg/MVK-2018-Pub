# MVK-2018
***
Project Map:
---
SSAG: Project master directory
* Android: Android specific files. In order to run android version go to this directory ("react-native run-android").
* IOS: iOS specific files. In order to run iOS version go to this directory ("react-native run-ios").
* APP: Main directory
     * Assets: All assets such as buttons, searchtabs etc.
     * Images: All images used within app.
     * Screens: Code relating to every specific screen in the app.
     * i18n: Language support
              
    

To create a release apk (android):

1. Open a terminal and change current directory to /MVK-2018-Pub/ssag/android
2. Type ./gradlew assembleRelease
3. Done
4. APK should be created in /MVK-2018-Pub/ssag/android/app/build/outputs/apk/

Troubleshooting:

If you get the error "Couldn't find preset "react-native" relative to directory" you might have to remove the file .babelrc from the root directory. That is, from /MVK-2018-Pub/.babelrc .

