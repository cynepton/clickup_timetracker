import React, { ReactElement } from 'react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import { customTheme } from './theme/customTheme';
import CalendarPage from './pages/CalendarPage';

const App: React.FC = (): ReactElement => {
    return (
        // Add material UI theme provider
        // <ThemeProvider theme={customTheme}>
        // {/* <CssBaseline /> */}
        <div className="App">
            <CalendarPage />
        </div>
        // </ThemeProvider>
    );
};

export default App;
