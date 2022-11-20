import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  sleepService:SleepService;
  currSliderValue:RangeValue;

  constructor(sleepService:SleepService) { 
    this.sleepService = sleepService;
  }

  ngOnInit() {
  }

  onSliderChange(e: Event) {
    this.currSliderValue = (e as RangeCustomEvent).detail.value;
  }

  onSleepinessLog() {
    
  }

}
