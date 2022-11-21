import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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

  constructor(sleepService:SleepService, private alertController: AlertController, private toastController: ToastController) { 
    this.sleepService = sleepService;

    //sleepService.logOvernightData(new OvernightSleepData(new Date(), new Date()));

  }

  ngOnInit() {
  }

  startCurrentSleep() {
    this.sleepStart = new Date;
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
