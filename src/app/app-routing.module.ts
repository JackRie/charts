import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { ChartComponent } from './chart/chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: '/bar-chart', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: MyBarChartComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
