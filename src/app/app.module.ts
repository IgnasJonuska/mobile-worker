import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetsModule } from './widgets/widgets.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './fake-pages/add-task/add-task.component';
import { HttpClientModule } from '@angular/common/http';
import { DummyTimesheetComponent } from './fake-pages/dummy-timesheet/dummy-timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DummyTimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
