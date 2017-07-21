import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
