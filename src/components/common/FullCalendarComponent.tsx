/* eslint-disable no-empty-pattern */
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

type FullCalendarComponentProps = {
  events?: string[];
}

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({}) => {
    return (
        <FullCalendar

            // Define FullCalendar plugins to use
            plugins={[ dayGridPlugin, timeGridPlugin ]}

            nowIndicator={true}

            // Define FullCalendar header toolbar configuration
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            //Set first day of the week
            firstDay={1}

            // Define FullCalendar title format
            titleFormat={{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }}

            // Define FullCalendar initial view
            initialView="timeGridWeek"

            // Timegrid view options
            allDaySlot={false}

            themeSystem='bootstrap'

        />
    );
};

export default FullCalendarComponent;