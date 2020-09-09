import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() == date2.getFullYear() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getDate() == date2.getDate();
  }

  isToday = (date: Date): boolean => {
    return this.isSameDay(new Date(), date);
  }

  weekendCheck = (date: Date): boolean => {
    return (date.getDay() === 6) || (date.getDay() === 0);
  }

  isEarlierDay = (date1: Date, date2: Date): boolean => {
    var compareToDay = moment(date1),
      compareDay = moment(date2);

    if (compareToDay.isBefore(compareDay)) {
      return true;
    }
    return false;
  }

  isLaterDay = (date1: Date, date2: Date): boolean => {
    var compareToDay = moment(date1),
      compareDay = moment(date2);

    if (compareToDay.isAfter(compareDay)) {
      return true;
    }
    return false;
  }
}