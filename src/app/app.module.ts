import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyAKg3gg-MZ1aIXX8E5OBVhcWT-_0l09Auw",
  authDomain: "chationic-df89e.firebaseapp.com",
  databaseURL: "https://chationic-df89e.firebaseio.com",
  projectId: "chationic-df89e",
  storageBucket: "chationic-df89e.appspot.com",
  messagingSenderId: "797062788958"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    DatabaseProvider
  ]
})
export class AppModule {}
