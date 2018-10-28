import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoaderPage } from '../pages/loader/loader';

export const firebaseCred = {
  apiKey: "AIzaSyBBngtTf37X5L59EnuqNnWlGFRqhgwmWQU",
  authDomain: "samatha-8edcd.firebaseapp.com",
  databaseURL: "https://samatha-8edcd.firebaseio.com",
  projectId: "samatha-8edcd",
  storageBucket: "samatha-8edcd.appspot.com",
  messagingSenderId: "659890863002"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoaderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoaderPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
