# MVK-2018
***
## About the application
This application was developed by collaboration between 11 students from The Royal Institute of Technology (KTH) and The City Museum in Stockholm. The applications purpose is to provide the museums visitors with a digital audio guide.

For questions regarding the project please email Gustav Kjellberg at gustav.kjellberg@hotmail.com

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
              
    

## To create a release apk (android):

Follow this guide https://facebook.github.io/react-native/docs/signed-apk-android.html


## Known bugs

* Stressing the media player by rapidly pressing forward in a tracklist longer than 2 tracks the application crash.
* Some of the times when the application is opened for the very first time it takes to presses to play an arbitary track. The reason for this is unknown and is not considered critical.
* Known React navigation feature/bug results in multiple stack windows when when a new view is pressed very quickly.
