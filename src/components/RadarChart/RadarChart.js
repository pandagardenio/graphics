import { useEffect, useState } from 'react';
import { ResponsiveRadar } from '@nivo/radar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import config from '../../config';
import Chart from '../Chart';
import Data from '../Data';

function BasicRadarChart(props) {
    return (
        <Chart title="Basic Radar Chart">
            <ResponsiveRadar
                data={props.data}
                keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                indexBy="taste"
            />
        </Chart>
    );
}

function RadarChartWithOptions(props) {
    return (
        <Chart title="Radar Chart with options">
            <ResponsiveRadar
                data={props.data}
                keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                indexBy="taste"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'nivo' }}
                blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
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
            <BasicRadarChart data={props.data}/>
            <RadarChartWithOptions data={props.data}/>
        </div>
    );
}

function RadarChart() {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(null);

    const handleTabChange = (_event, tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetch(config.apiUrl + 'data/radar-chart')
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

export default RadarChart;
