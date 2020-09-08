import { Event } from './event';

export interface Task {
    events: Array<Event>;
    start: Date;
    end: Date;
    isApproved: boolean;
    isRejected: boolean;
}