import { Component, OnInit } from '@angular/core';

declare var ReCordovaPlugin:any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    var screenNavParam = { 
      screenName: "Page2"
     }
    ReCordovaPlugin.screenNavigation(screenNavParam,(res) => {
      console.log("Screen Navigation callback is sucess" + res);
    })
  }

}
