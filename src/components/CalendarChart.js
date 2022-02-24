import { ResponsiveCalendar } from '@nivo/calendar'

import Chart from './Chart';

import data from '../data/CalendarChart.json';

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

function CalendarChart() {
    return (
        <div>
            <BasicCalendarChart data={data}/>
            <BasicCalendarChartWithAxis data={data}/>
        </div>
    );
}

export default CalendarChart;
