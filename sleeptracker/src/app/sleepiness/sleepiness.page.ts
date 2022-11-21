import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ToastController } from '@ionic/angular';

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



  constructor(sleepService:SleepService, private toastController: ToastController) { 
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

    this.inputBox = "";
    this.rangeSlider = 1;
  }

  onNoteInputChange(e: Event) {
    this.currNoteString = ((<HTMLTextAreaElement> e.target).value as string);
  }

  inputTextCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  async sleepyToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Log Submitted!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
