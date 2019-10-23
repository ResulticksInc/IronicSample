import { Injectable } from '@angular/core';
import {Cordova,Plugin,IonicNativePlugin} from '@ionic-native/core'
@Plugin({
  pluginName:"ReCordovaPlugin",
  plugin:"resulticks-cordova-plugin",
  pluginRef:"ReCordovaPlugin",
  platforms:["Android"],
  repo:"https://github.com/ResulticksInc/ReCordovaPlugin.git"

})
@Injectable({
  providedIn: 'root'
})
export class ResulticksProviderService extends IonicNativePlugin {

 
  @Cordova()
  screenNavigation (screenName):Promise<any>{
    return;
  }
}
