import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './fake-pages/add-task/add-task.component';
import { TimesheetComponent } from './widgets/timesheet/timesheet.component';

const routes: Routes = [
  { path: '', component:TimesheetComponent },
  { path: 'add-task', component: AddTaskComponent },
  // { path: 'timesheet', component: TimesheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
