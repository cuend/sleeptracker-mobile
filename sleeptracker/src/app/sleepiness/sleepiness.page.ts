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
  currStanfordValue:String;
  currNoteString:string;
  inputBox:String;
  rangeSlider:RangeValue;



  constructor(sleepService:SleepService) { 
    this.sleepService = sleepService;
  }

  ngOnInit() {
  }

  onSliderChange(e: Event) {
    this.currSliderValue = (e as RangeCustomEvent).detail.value;

    this.currStanfordValue = StanfordSleepinessData.ScaleValues[this.currSliderValue as number];
  }

  onSleepinessLog(e: Event) {
    this.sleepService.logSleepinessData(new StanfordSleepinessData((this.currSliderValue as number), new Date(), this.currNoteString));
<<<<<<< HEAD
    // window.location.reload();
=======

    this.inputBox = "";
    this.rangeSlider = 1;
>>>>>>> b29bfe1c2d8d0e2fcf88852a2f19748099c2c0dd
  }

  onNoteInputChange(e: Event) {
    this.currNoteString = ((<HTMLTextAreaElement> e.target).value as string);
  }

  inputTextCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
