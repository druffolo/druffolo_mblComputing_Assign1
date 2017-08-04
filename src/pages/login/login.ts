import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  params: Object;
 pushPage: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }
  logincall(){
    this.pushPage = HomePage;
    this.navCtrl.setRoot(HomePage)
  }

    signupCall(){ this.navCtrl.push(SignupPage); }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }



}