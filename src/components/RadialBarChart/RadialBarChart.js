import { useEffect, useState } from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import config from '../../config';
import Chart from '../Chart';
import Data from '../Data';

function BasicRadialBarChart(props) {
    return (
        <Chart title="Basic Radial Bar Chart">
            <ResponsiveRadialBar
                data={props.data}
            />
        </Chart>
    );
}

function RadialBarChartWithOptions(props) {
    return (
        <Chart title="Radial Bar Chart with options">
            <ResponsiveRadialBar
                data={props.data}
                valueFormat=">-.2f"
                padding={0.4}
                cornerRadius={2}
                margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 6,
                        itemDirection: 'left-to-right',
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'square',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
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
    return (
        <div>
            <BasicRadialBarChart data={props.data}/>
            <RadialBarChartWithOptions data={props.data}/>
        </div>
    );
}

function RadialBarChart() {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(null);

    const handleTabChange = (_event, tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetch(config.apiUrl + 'data/radial-bar-chart')
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

export default RadialBarChart;
