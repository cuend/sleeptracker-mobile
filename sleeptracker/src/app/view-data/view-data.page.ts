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
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('lineCanvasSleepiness') private lineCanvasSleepiness: ElementRef;

  barChart: any;
  doughnutChart: any;
  overnightLineChart: any;
  sleepinessLineChart: any;


  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {

    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("2022-11-18"), new Date("2022-11-19")));
    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("2022-11-16"), new Date("2022-11-17")));
    SleepService.AllOvernightData.push(new OvernightSleepData(new Date("2022-11-20"), new Date("2022-11-21")));

    SleepService.AllSleepinessData.push(new StanfordSleepinessData(2, new Date("2022-11-18"), ""));
    SleepService.AllSleepinessData.push(new StanfordSleepinessData(7, new Date("2022-11-16"), ""));
    SleepService.AllSleepinessData.push(new StanfordSleepinessData(3, new Date("2022-11-16"), ""));

    //this.barChartMethod();
    this.lineChartForOvernightSleep();
    this.lineChartForSleepiness();
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    let hours_slept = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < SleepService.AllOvernightData.length;i++) {
      hours_slept.push(SleepService.AllOvernightData[i].getTotalMinutesSlept());
      dates_logged.push(SleepService.AllOvernightData[i].getDateStringForGraph());
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: dates_logged, //['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: 'Minutes Slept',
          data: hours_slept,//[200, 150, 80, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        }
      }
    });
  }

  lineChartForOvernightSleep() {
    let lastFiveLogs = this.sleepService.getLastFiveOvernightLogs();
    let minutes_slept = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      minutes_slept.push(lastFiveLogs[i].getTotalMinutesSlept());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.overnightLineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: dates_logged,
        datasets: [{
          label: 'Minutes slept',
          data: minutes_slept,
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
    let minutes_slept = [];
    let dates_logged = [];

    // Put data into arrays
    for (let i=0; i < lastFiveLogs.length;i++) {
      minutes_slept.push(lastFiveLogs[i].getTotalHoursSlept());
      console.log(lastFiveLogs[i].getTotalHoursSlept());
      dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    }

    this.overnightLineChart.data.labels = dates_logged;
    this.overnightLineChart.data.datasets =[{
      label: 'Hours Slept',
      data: minutes_slept,
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
