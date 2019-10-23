import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';

declare var cordova: any;
declare var myPlugin: any;
declare var ReCordovaPlugin: any;
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage implements OnInit {
	constructor(private menu: MenuController) {
		console.log('Home page Called');
	}
	ngOnInit() {
		this.screenNavigation();
	}
	screenNavigation() {
		var screenNavParam = {
			screenName: 'Dashboard'
		};
		ReCordovaPlugin.screenNavigation(screenNavParam, (res) => {
			console.log('Screen Navigation callback is sucess' + res);
		});
	}

	userRegister() {
		var userregisterParam = {
			uniqueId: 'ABC123',
			name: 'Rajaram',
			age: '29',
			email: 'resul_rajaram.resulticksmail.com',
			phone: '9941107039',
			gender: 'Male',
			token: 'Result_token',
			profileUrl: 'Resulticks_profile'
		};
		ReCordovaPlugin.userRegister(userregisterParam);
	}

	locationUpdate() {
		var location = {
			latitude: 13.067439,
			longitude: 80.237617
		};
		ReCordovaPlugin.locationUpdate(location);
	}

	customEvent() {
		var customEventPara = {
			eventName: 'Product Purchased',
			data: {
				productId: 'P234234',
				productName: 'Mobile Phone'
			}
		};
		ReCordovaPlugin.customEvent(customEventPara);
	}
	notify_val: any;

	getNotification() {
		ReCordovaPlugin.getNotification('getNotification', (res: any) => {
			this.notify_val = JSON.parse(res);
			alert(this.notify_val);
		});
	}
	deleteNotification() {}
}
