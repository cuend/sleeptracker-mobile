import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-log-sleep',
  templateUrl: './log-sleep.page.html',
  styleUrls: ['./log-sleep.page.scss'],
})
export class LogSleepPage implements OnInit {
  sleepService:SleepService;
  sleepStart:Date;
  sleepEnd:Date;
  overNightSleep:OvernightSleepData;
  currentlySleeping:boolean = false;
  isModalOpen = false;
  startString:string;
  endString:string;
  currentDateTime:string = new Date().toISOString();

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(sleepService:SleepService, private localNotifications:LocalNotifications, private toastController: ToastController) { 
    this.sleepService = sleepService;


    //sleepService.logOvernightData(new OvernightSleepData(new Date(), new Date()));
    

  }

  ngOnInit() {
  }

  addSleep() {
    this.sleepStart = new Date(this.startString);
    this.sleepEnd = new Date(this.endString);
    this.overNightSleep = new OvernightSleepData(this.sleepStart, this.sleepEnd);
    this.sleepService.logOvernightData(this.overNightSleep);

    console.log(this.overNightSleep);
    console.log(this.sleepStart);
    console.log(this.sleepEnd);
    console.log(this.startString);
    console.log(this.endString);
    console.log(this.currentDateTime);
  }

  startCurrentSleep() {
    this.sleepStart = new Date();
    this.currentlySleeping = true;
  }

  endCurrentSleep() {
    this.sleepEnd = new Date;

    this.overNightSleep = new OvernightSleepData(this.sleepStart, this.sleepEnd);
    this.currentlySleeping = false;

    this.sleepService.logOvernightData(new OvernightSleepData(this.sleepStart,this.sleepEnd));
  }

  async startToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Goodnight!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async endToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Welcome Back!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  
  simpleNotif () {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 6000)},
      led: 'FF0000',
      sound: null
    });
  }

}
