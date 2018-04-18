import { HomePage } from './../home/home';
import { ActuPage } from './../actu/actu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ActualitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualite',
  templateUrl: 'actualite.html',
})
export class ActualitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualitePage');
  }
  VoirPlus(){
    this.navCtrl.push(ActuPage);
  }
  Retour(){
    this.navCtrl.push(HomePage);
  }
}
