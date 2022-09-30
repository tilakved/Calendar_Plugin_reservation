import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomCalendarModule} from "./custom-calendar/custom-calendar.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
