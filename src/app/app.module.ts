import { ActuPage } from './../pages/actu/actu';
import { ChroniquePage } from './../pages/chronique/chronique';
import { ActualitePage } from './../pages/actualite/actualite';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TitlepComponent} from "../components/titlep/titlep";
import { DataProvider } from '../providers/data/data';
import {ActulistPage} from "../pages/actulist/actulist";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      TitlepComponent,
    ActulistPage,
    ActuPage,
    ActualitePage,
    ChroniquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActulistPage,
    ActualitePage,
    ChroniquePage,
    ActuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
