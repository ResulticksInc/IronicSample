import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    version: string = "1.0.0";

    appPages = [
        {
            title: 'Dashboard',
            url: '/home',
            icon: '🏠'
        },
        {
            title: 'My Profile',
            url: '/list',
            icon: '👤'
		},
		{
			title: 'Page1',
			url: '/page1',
			icon: '⚙️'
		},
		{
			title: "Page2",
			url: "/page2",
			icon: "🗺️"
		},
        {
            title: "Promotions",
            url: "/promotions",
            icon: "💸"
        }
    ];

  constructor() { }

  ngOnInit() { }

    async leaveAReview() { }


    openFacebookProfile() { }


    openInstagramProfile() { }


    openTwitterProfile() { }


    openWebsite() { }

}