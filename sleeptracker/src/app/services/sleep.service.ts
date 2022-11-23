import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	public getLastSleepData(sleepData:OvernightSleepData) {
		return SleepService.AllSleepData[SleepService.AllSleepData.length - 1];
	}

	public getLastSleepinessLog(sleepData:OvernightSleepData) {
		return SleepService.AllSleepinessData[SleepService.AllSleepinessData.length - 1];
	}

	public getLastOvernightLog(sleepData:OvernightSleepData) {
		return SleepService.AllOvernightData[SleepService.AllOvernightData.length - 1];
	}

	public getLastFiveOvernightLogs() {
		let lastFiveLogs = [];
		
		let x = 0;
		for (let i=SleepService.AllOvernightData.length - 1; i >= 0 && x < 5;i--) {
			lastFiveLogs.push(SleepService.AllOvernightData[i]);
			x++;
		}

		return lastFiveLogs.reverse();
	}

	public getLastFiveSleepinessLogs() {
		let lastFiveLogs = [];
		
		let x = 0;
		for (let i=SleepService.AllSleepinessData.length - 1; i >= 0 && x < 5;i--) {
			lastFiveLogs.push(SleepService.AllOvernightData[i]);
			x++;
		}

		return lastFiveLogs.reverse();
	}
}
