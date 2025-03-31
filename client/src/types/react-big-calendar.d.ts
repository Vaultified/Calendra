declare module "react-big-calendar" {
  import { ComponentType } from "react";

  export interface Event {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    resource?: any;
  }

  export interface CalendarProps {
    localizer: any;
    events: Event[];
    startAccessor: string;
    endAccessor: string;
    style?: object;
    selectable?: boolean;
    onSelectEvent?: (event: Event) => void;
    onSelectSlot?: (slotInfo: {
      start: Date;
      end: Date;
      slots: Date[] | string[];
      action: "select" | "click" | "doubleClick";
    }) => void;
    view?: string;
    onView?: (view: string) => void;
    views?: string[];
    step?: number;
    showMultiDayTimes?: boolean;
    defaultDate?: Date;
    popup?: boolean;
  }

  export const Views: {
    MONTH: string;
    WEEK: string;
    WORK_WEEK: string;
    DAY: string;
    AGENDA: string;
  };

  export function dateFnsLocalizer(args: {
    format: any;
    parse: any;
    startOfWeek: any;
    getDay: any;
    locales: any;
  }): any;

  const Calendar: ComponentType<CalendarProps>;
  export default Calendar;
}
