import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }
  
  isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getUTCFullYear() == date2.getUTCFullYear() &&
            date1.getUTCMonth() == date2.getUTCMonth() &&
            date1.getUTCDate() == date2.getUTCDate();
  }
  
  isToday = (date: Date): boolean => {
    return this.isSameDay(new Date(), date);
  }
  
  weekendCheck = (date: Date): boolean => {
    return (date.getDay() === 6) || (date.getDay() === 0);
  }
}