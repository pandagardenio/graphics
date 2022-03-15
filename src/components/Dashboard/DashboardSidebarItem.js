import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link, useMatch } from "react-router-dom";

function DashboardSidebarItem(props) {
    const selected = !!useMatch(props.to);
    return (
        <ListItemButton selected={selected} component={Link} to={props.to}>
                <ListItemIcon>
                    {props.children}
                </ListItemIcon>
                <ListItemText primary={props.section} />
        </ListItemButton>
    )
}

export default DashboardSidebarItem;
