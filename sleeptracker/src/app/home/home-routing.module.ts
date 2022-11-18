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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
