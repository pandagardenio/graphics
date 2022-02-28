import { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Data from '../Data';
import Chart from '../Chart';
import BarChartControls from './BarChartControls';

import './BarChart.css';
import config from '../../config';

function BasicBarChart(props) {
    return (
        <Chart title="Basic Bar Chart">
            <ResponsiveBar
                data={props.data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                layout={props.layout}
                groupMode={props.groupMode}
            />
        </Chart>
    );
}

function BasicBarChartWithAxis(props) {
    return (
        <Chart title="Basic Bar Chart With Axis">
            <ResponsiveBar
                data={props.data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                layout={props.layout}
                groupMode={props.groupMode}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Chart>
    );
}

function Graphic(props) {
    const [activeLayout, setActiveLayout] = useState('vertical');
    const [activeGroupMode, setActiveGroupMode] = useState('stacked');

    const handleLayoutChange = (layout) => {
        setActiveLayout(layout);
    }

    const handleGroupModeChange = (groupMode) => {
        setActiveGroupMode(groupMode);
    };

    return (
        <div>
            <BarChartControls
                activeLayout={activeLayout}
                onLayoutChange={handleLayoutChange}
                activeGroupMode={activeGroupMode}
                onGroupModeChange={handleGroupModeChange}
            />
            <BasicBarChart data={props.data} layout={activeLayout} groupMode={activeGroupMode}/>
            <BasicBarChartWithAxis data={props.data} layout={activeLayout} groupMode={activeGroupMode}/>
        </div>
    );
}

function BarChart() {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(null);

    const handleTabChange = (_event, tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetch(config.apiUrl + 'data/bar-chart')
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

export default BarChart;
