import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

function GroupModeControls(props) {
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

export default GroupModeControls;
