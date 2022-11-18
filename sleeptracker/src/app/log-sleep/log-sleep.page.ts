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

  constructor(sleepService:SleepService) { 
    this.sleepService = sleepService;

    sleepService.logOvernightData(new OvernightSleepData(new Date(), new Date()));

    
  }

  ngOnInit() {
  }

}
