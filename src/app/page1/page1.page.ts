import { Component, OnInit } from '@angular/core';
declare var cordova: any;
declare var myPlugin: any;
declare var ReCordovaPlugin: any;
@Component({
	selector: 'app-page1',
	templateUrl: './page1.page.html',
	styleUrls: [ './page1.page.scss' ]
})
export class Page1Page implements OnInit {
	constructor() {}

	ngOnInit() {
		var screenNavParam = {
			screenName: 'Page1'
		};
		ReCordovaPlugin.screenNavigation(screenNavParam);
	}
}
