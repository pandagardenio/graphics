import { ResponsivePie } from '@nivo/pie'

import Chart from './Chart';

import data from '../data/PieChart.json';

function BasicPieChart(props) {
    return (
        <Chart title="Basic Pie Chart">
            <ResponsivePie
                data={props.data}
            />
        </Chart>
    );
}

function BasicPieChartWithAxis(props) {
    return (
        <Chart title="Basic Pie Chart">
            <ResponsivePie
                data={props.data}
            />
        </Chart>
    );
}

function PieChart() {
    return (
        <div>
            <BasicPieChart data={data}/>
            <BasicPieChartWithAxis data={data}/>
        </div>
    );
}

export default PieChart;
