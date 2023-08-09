type CalendarEvent = {
    id: string;
    groupId?: string;
    allDay?: boolean;
    start: Date;
    end: Date;
}

export type {
    CalendarEvent
};