import { useEffect, useState } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import config from '../../config';
import Chart from '../Chart';
import Data from '../Data';

function BasicCalendarChart(props) {
    return (
        <Chart title="Basic Calendar Chart">
            <ResponsiveCalendar
                data={props.data}
                from="2015-03-01"
                to="2016-07-12"
            />
        </Chart>
    );
}

function BasicCalendarChartWithAxis(props) {
    return (
        <Chart title="Calendar Chart">
            <ResponsiveCalendar
                data={props.data}
                from="2015-03-01"
                to="2016-07-12"
                emptyColor="#eeeeee"
                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                isInteractive={true}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
            />
        </Chart>
    );
}

function Graphic(props) {
    return (
        <div>
            <BasicCalendarChart data={props.data}/>
            <BasicCalendarChartWithAxis data={props.data}/>
        </div>
    );
}

function CalendarChart() {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(null);

    const handleTabChange = (_event, tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetch(config.apiUrl + 'data/calendar-chart')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    return (
        <>
            <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab label="Data"/>
                    <Tab label="Graphic"/>
                </Tabs>
            </Box>
            {activeTab === 0 && <Data data={data}/>}
            {activeTab === 1 && <Graphic data={data}/>}
        </>
    );
}

export default CalendarChart;
