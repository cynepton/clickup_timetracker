import React, { useEffect } from 'react';
import FullCalendarComponent from '../components/common/FullCalendarComponent';
import { ClickupTimeTrackerApi } from '../api/ClickupTimeTracking';

const CalendarPage: React.FC = () => {
    // const clickupTimeTrackerApi = new ClickupTimeTrackerApi('token', 'workspaceID');

    // useEffect(() => {
    //     async function getEntries() {
    //         const entries = await clickupTimeTrackerApi.getTimeEntries();
    //         console.log('Final Time Entries', entries);
    //     }
    //     getEntries();
    // }, []);

    return (
        <div>
            <FullCalendarComponent />
        </div>
    );
};

export default CalendarPage;