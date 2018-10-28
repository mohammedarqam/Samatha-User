import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import* as firebase from 'firebase';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  signOut(){
    firebase.auth().signOut();
  }
}
