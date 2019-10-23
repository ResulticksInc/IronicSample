import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FCM} from '@ionic-native/fcm/ngx'
//import {Cordova,Plugin,IonicNativePlugin} from '@ionic-native/core'

//import { ReCordovaPlugin} from 'resulticks-cordova-plugin';

var cordova:any;
declare var ReCordovaPlugin:any;
//import {ResulticksProviderService} from './resulticks-provider.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private fcm:FCM
		//private rps:ResulticksProviderService
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			this.fcm.getToken().then(token => {
				console.log("Send token to server ", token);
				localStorage.setItem('fcm_token',token);
			  });


			  this.fcm.onNotification().subscribe(data => {

				var customEventPara = {
					eventName: 'Notification Received',
					data: {
					   productId: 'P234234',                    
					   productName: 'Resulticks'
					  }
					}
				ReCordovaPlugin.customEvent(customEventPara);
				if(data.wasTapped){
				  console.log("Received in background");
				} else {
				  console.log("Received in foreground");
				};
			  });
		});
	}
}
