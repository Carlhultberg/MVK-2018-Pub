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


Current APK can be found at
https://drive.google.com/open?id=16oiJhXUVUhW8zqMnEdBgMgNkW0BzBgzB
since Github only allows files up to 100mb it's not possible to upload it here directly.

## Known bugs

* Stressing the media player by rapidly pressing forward in a tracklist longer than 2 tracks the application crash.
* Some of the times when the application is opened for the very first time it takes to presses to play an arbitary track. The reason for this is unknown and in not considered critical.
* Known React navigation feature/bug results in multiple stack windows when when a new view is pressed very quickly.

## The MIT License
Copyright(c) 2018 Gustav Kjellberg, Gustaf Lidfeldt, Diar Sabri, Maria Lindblad, Lars Lundin, Carl Hultberg, Bruhan Hashi, Sebastian Franzén, Jesper Öberg, Björn Aurell Hansson, Tommy Samuelsson. <gustav.kjellberg@hotmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
