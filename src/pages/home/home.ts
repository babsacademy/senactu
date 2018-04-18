import { ActualitePage } from './../actualite/actualite';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActulistPage} from "../actulist/actulist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
    navigateToList() {
        this.navCtrl.push(ActulistPage);
    }
}
