import { ResponsiveBar } from '@nivo/bar'
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import Chart from './Chart';

import data from '../data/BarChart.json';

import './BarChart.css';
import { useState } from 'react';

function LayoutChips(props) {
    const handleOnClick = (layout) => {
        props.onLayoutChange(layout);
    };

    const getChipColor = (layout) => {
        if (layout === props.activeLayout) {
            return 'primary';
        }
        return 'default';
    };

    return (
        <div>
            <Typography className="bar-chart__controls-title" component="h3">Layout</Typography>
            <Chip color={getChipColor('vertical')} label="Vertical" onClick={() => handleOnClick('vertical')}/>
            <Chip color={getChipColor('horizontal')} label="Horizontal" onClick={() => handleOnClick('horizontal')}/>
        </div>
    )
}

function GroupModeChips(props) {
    const handleOnClick = (groupMode) => {
        props.onGroupModeChange(groupMode);
    };

    const getChipColor = (groupMode) => {
        if (groupMode === props.activeGroupMode) {
            return 'primary';
        }
        return 'default';
    };

    return (
        <div>
            <Typography className="bar-chart__controls-title" component="h3">Group mode</Typography>
            <Chip color={getChipColor('stacked')} label="Stacked" onClick={() => handleOnClick('stacked')}/>
            <Chip color={getChipColor('grouped')} label="Grouped" onClick={() => handleOnClick('grouped')}/>
        </div>
    )
}

function BarChartControls(props) {
    return (
        <div className="bar-chart__controls">
            <LayoutChips activeLayout={props.activeLayout} onLayoutChange={props.onLayoutChange}/>
            <GroupModeChips activeGroupMode={props.activeGroupMode} onGroupModeChange={props.onGroupModeChange}/>
        </div>
    )
}

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

function BarChart() {
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
            <BasicBarChart data={data} layout={activeLayout} groupMode={activeGroupMode}/>
            <BasicBarChartWithAxis data={data} layout={activeLayout} groupMode={activeGroupMode}/>
        </div>
    );
}

export default BarChart;
