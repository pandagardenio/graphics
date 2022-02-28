import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

function LayoutControls(props) {
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

export default LayoutControls;
