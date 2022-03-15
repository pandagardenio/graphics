import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import BarChart from './components/BarChart/BarChart';
import CalendarChart from './components/CalendarChart/CalendarChart';
import PieChart from './components/PieChart/PieChart';
import RadarChart from './components/RadarChart/RadarChart';
import RadialBarChart from './components/RadialBarChart/RadialBarChart';

function App() {
    const [activeSection, setActiveSection] = useState('Bar Chart');

    const handleOnSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <Dashboard section={activeSection} onSectionChange={handleOnSectionChange}>
            <Routes>
                <Route path="/bar-chart" element={<BarChart/>}/>
                <Route path="/pie-chart" element={<PieChart/>}/>
                <Route path="/radar-chart" element={<RadarChart/>}/>
                <Route path="/radial-bar-chart" element={<RadialBarChart/>}/>
                <Route path="/calendar-chart" element={<CalendarChart/>}/>
            </Routes>
        </Dashboard>
    );
}

export default App;
