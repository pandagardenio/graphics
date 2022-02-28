import LayoutControls from "./LayoutControls";
import GroupModeControls from "./GroupModeControls";

function BarChartControls(props) {
    return (
        <div className="bar-chart__controls">
            <LayoutControls activeLayout={props.activeLayout} onLayoutChange={props.onLayoutChange}/>
            <GroupModeControls activeGroupMode={props.activeGroupMode} onGroupModeChange={props.onGroupModeChange}/>
        </div>
    )
}

export default BarChartControls;
