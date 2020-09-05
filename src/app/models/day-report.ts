import { ApprovalState } from './approval-state';

export interface DayReport{
    date: Date;
    tasksCount: number;
    firstTaskStart: Date;
    lastTaskEnd: Date;
    status: ApprovalState;
}