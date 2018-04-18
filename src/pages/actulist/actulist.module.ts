import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActulistPage } from './actulist';

@NgModule({
  declarations: [
    ActulistPage,
  ],
  imports: [
    IonicPageModule.forChild(ActulistPage),
  ],
})
export class ActulistPageModule {}
