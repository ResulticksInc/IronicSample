import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { from } from 'rxjs';

declare var cordova: any;
declare var myPlugin: any;
declare var ReCordovaPlugin: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	email = 'admin';
	password = 'admin';
	constructor(private navCtrl: NavController, private menu: MenuController, private device: Device) {}

	ngOnInit() {
		var screenNavParam = {
			screenName: 'Login Page'
		};
		// ReCordovaPlugin.screenNavigation(screenNavParam,(res) => {
		//   console.log("Screen Navigation callback is sucess" + res);
		// })
	}
	ionViewDidEnter() {
		//this.menu.enable(false);
		// If you have more than one side menu, use the id like below
		// this.menu.swipeEnable(false, 'menu1');
	}

	loginBtn_clicked() {
		if (this.email != '' && this.password != '') {
			if (this.email == 'admin' && this.password == 'admin') {
				this.navCtrl.navigateRoot('home', { queryParams: { param1: 'Rajaram' } });

				var userregisterParam = {
					uniqueId: '',
					name: 'Rajaram',
					age: '29',
					email: this.email,
					phone: '9941107039',
					gender: 'Male',
					token: localStorage.getItem('fcm_token'),
					profileUrl: ''
				};
				ReCordovaPlugin.userRegister(userregisterParam);
			} else {
				alert('Please enter the vaild login details');
			}
		} else if (this.email == '') {
			alert('Plese enter your email');
		} else if (this.password == '') {
			alert('Please enter your password');
		}
	}
}
