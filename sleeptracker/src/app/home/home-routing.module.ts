import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';



const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren:() => import('../sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
          }
        ]
      },
      {
        path: 'logSleep',
        children: [
          {
            path:'',
            loadChildren: () => import('../log-sleep/log-sleep.module').then(m=>m.LogSleepPageModule)
          }
        ]
      },
      {
        path: 'viewData',
        children: [
          {
            path:'',
            loadChildren: () => import('../view-data/view-data.module').then(m=>m.ViewDataPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
