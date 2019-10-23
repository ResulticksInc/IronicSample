import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

import { FCM } from '@ionic-native/fcm/ngx';
import { Device } from '@ionic-native/device/ngx';

//import { ReCordovaPlugin} from 'recordovaplugin';

//import {ResulticksProviderService} from './resulticks-provider.service';


@NgModule({
	declarations: [
		AppComponent,
		SidemenuComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		FCM,
		Device,
		//ResulticksProviderService,
	//	ReCordovaPlugin,
		
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
