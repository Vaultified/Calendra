"use client";

import { useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays } from "date-fns";
import { enUS } from "date-fns/locale";

// Import the required CSS
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set up the localizer for date handling
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Sample events for demonstration
const initialEvents = [
  {
    id: 1,
    title: "Project Kickoff Meeting",
    start: new Date(new Date().setHours(9, 0, 0)),
    end: new Date(new Date().setHours(11, 0, 0)),
  },
  {
    id: 2,
    title: "Client Presentation",
    start: addDays(new Date(new Date().setHours(14, 0, 0)), 1),
    end: addDays(new Date(new Date().setHours(16, 0, 0)), 1),
  },
  {
    id: 3,
    title: "Team Lunch",
    start: addDays(new Date(new Date().setHours(12, 0, 0)), 2),
    end: addDays(new Date(new Date().setHours(13, 30, 0)), 2),
  },
  {
    id: 4,
    title: "Strategy Planning",
    start: addDays(new Date(new Date().setHours(10, 0, 0)), 3),
    end: addDays(new Date(new Date().setHours(12, 30, 0)), 3),
  },
];

// Define custom styles for the calendar
const calendarStyle = {
  height: 800,
};

export default function Calendar() {
  const [events, setEvents] = useState(initialEvents);
  const [view, setView] = useState(Views.MONTH);

  const handleSelectEvent = (event: any) => {
    alert(`Selected event: ${event.title}`);
    // You can replace this with a modal or other UI component to show event details
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("New Event Title:");
    if (title) {
      setEvents([
        ...events,
        {
          id: events.length + 1,
          title,
          start,
          end,
        },
      ]);
    }
  };

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={calendarStyle}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        view={view}
        onView={setView}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        popup
      />
    </div>
  );
}
