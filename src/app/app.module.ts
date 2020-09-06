import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './fake-pages/add-task/add-task.component';
import { TimesheetComponent } from './widgets/timesheet/timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
