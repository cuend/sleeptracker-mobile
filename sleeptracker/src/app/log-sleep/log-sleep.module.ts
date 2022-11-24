import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSleepPageRoutingModule } from './log-sleep-routing.module';

import { LogSleepPage } from './log-sleep.page';

import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSleepPageRoutingModule
  ],
  declarations: [LogSleepPage],
  providers: [
    LocalNotifications,
  ]
})
export class LogSleepPageModule {}
