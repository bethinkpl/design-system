export type CalendarDate = string;
export declare function isCalendarDate(value: unknown): value is CalendarDate;
export declare function isCalendarDateOrNull(value: unknown): boolean;
export declare function areCalendarDates(value: unknown): boolean;
export declare function parseCalendarDate(day: CalendarDate): Date;
export declare function parseCalendarDateOrNull(day: CalendarDate | null | undefined): Date | null;
export declare function formatCalendarDate(date: Date): CalendarDate;
