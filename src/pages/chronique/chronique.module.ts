import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChroniquePage } from './chronique';

@NgModule({
  declarations: [
    ChroniquePage,
  ],
  imports: [
    IonicPageModule.forChild(ChroniquePage),
  ],
})
export class ChroniquePageModule {}
