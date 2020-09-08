export interface Event{
    quantity: number;
    price: number;
    eventTypeName: string;
    isExpenseType: boolean;
    isHoursEventType: boolean;
    isAdditionalHoursEventType: boolean;
    isWorkHour: boolean;
    start?: Date;
    end?: Date;
}