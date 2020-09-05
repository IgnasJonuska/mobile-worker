import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './mocked-pages/add-task/add-task.component';
import { TimesheetPageComponent } from './mocked-pages/timesheet/timesheet.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TimesheetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
