import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', redirectTo: '/reportes', pathMatch: 'full' },
  { path: 'reportes', component: ReportesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }