import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderPage } from '../pages/loader/loader';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoaderPage;

  constructor(
  public platform: Platform,
  public statusBar: StatusBar,
  public splashScreen: SplashScreen,
  public db : AngularFireDatabase,  
  ) {
    platform.ready().then(() => {
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      })

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

