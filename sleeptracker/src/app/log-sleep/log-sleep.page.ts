import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';

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

  constructor(sleepService:SleepService) { 
    this.sleepService = sleepService;
  }

  ngOnInit() {
  }

  startCurrentSleep() {
    this.sleepStart = new Date;
    this.currentlySleeping = true;
  }

  endCurrentSleep() {
    this.sleepStart = new Date;

    this.overNightSleep = new OvernightSleepData(this.sleepStart, this.sleepEnd);
  }

}
