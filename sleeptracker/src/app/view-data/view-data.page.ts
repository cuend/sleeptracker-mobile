import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.page.html',
  styleUrls: ['./view-data.page.scss'],
})
export class ViewDataPage implements OnInit, AfterViewInit {
  sleepService:SleepService;

  constructor(sleepService:SleepService) { 
    this.sleepService = sleepService;
  }

  ngOnInit() {
  }

  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('lineCanvasSleepiness') private lineCanvasSleepiness: ElementRef;
  overnightLineChart: any;
  sleepinessLineChart: any;


  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {

    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("November 11, 2022 20:13:00"), new Date("November 12, 2022 4:13:00")));
    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("November 16, 2022 22:34:00"), new Date("November 17, 2022 6:01:00")));
    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("November 18, 2022 23:42:00"), new Date("November 19, 2022 7:04:00")));

    SleepService.AllSleepinessData.push(new StanfordSleepinessData(2, new Date("2022-11-18"), ""));
    SleepService.AllSleepinessData.push(new StanfordSleepinessData(7, new Date("2022-11-16"), ""));
    SleepService.AllSleepinessData.push(new StanfordSleepinessData(3, new Date("2022-11-16"), ""));

    //this.barChartMethod();
    this.lineChartForOvernightSleep();
    this.lineChartForSleepiness();
  }

  lineChartForOvernightSleep() {
    let lastFiveLogs = this.sleepService.getLastFiveOvernightLogs();
    let hours_slept = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      hours_slept.push(lastFiveLogs[i].getTotalHoursSlept());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.overnightLineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: dates_logged,
        datasets: [{
          label: 'Hours slept',
          data: hours_slept,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

  lineChartForSleepiness() {
    let lastFiveLogs = this.sleepService.getLastFiveSleepinessLogs();
    let sleepiness_values = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      sleepiness_values.push(lastFiveLogs[i].getLoggedValue());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.sleepinessLineChart = new Chart(this.lineCanvasSleepiness.nativeElement, {
      type: 'line',
      data: {
        labels: dates_logged,
        datasets: [{
          label: 'Sleepiness Rating',
          data: sleepiness_values,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

  refreshSleepinessGraph() {
    let lastFiveLogs = this.sleepService.getLastFiveSleepinessLogs();
    let sleepiness_values = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      sleepiness_values.push(lastFiveLogs[i].getLoggedValue());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.sleepinessLineChart.data.labels = dates_logged;
    this.sleepinessLineChart.data.datasets =[{
      label: 'Sleepiness Rating',
      data: sleepiness_values,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }];
    this.sleepinessLineChart.update();
  }

  refreshOvernightGraph() {
    let lastFiveLogs = this.sleepService.getLastFiveOvernightLogs();
    let hours_slept = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      hours_slept.push(lastFiveLogs[i].getTotalHoursSlept());
      console.log(lastFiveLogs[i].getTotalHoursSlept());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.overnightLineChart.data.labels = dates_logged;
    this.overnightLineChart.data.datasets =[{
      label: 'Hours Slept',
      data: hours_slept,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }];


    this.overnightLineChart.update();
  }



  viewDataRefresh(e : Event) {
      this.refreshSleepinessGraph();
      this.refreshOvernightGraph();

      setTimeout(() => {
        // Any calls to load data go here
        (e as RefresherCustomEvent).target.complete();
      }, 2000);
      
  }


}
