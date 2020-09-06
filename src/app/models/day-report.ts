import { ApprovalState } from './approval-state';
import { Task } from './task';

export interface DayReport{
    date: Date;
    tasksCount: number;
    firstTaskStart: Date;
    lastTaskEnd: Date;
    status: ApprovalState;
    tasks: Array<Task>;
    // minutesWorked: number;
}