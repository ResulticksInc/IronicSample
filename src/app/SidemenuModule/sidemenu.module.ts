import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {SidemenuComponent} from '../sidemenu/sidemenu.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [SidemenuComponent],
  exports:[SidemenuComponent]
})
export class SidemenuModule {}
