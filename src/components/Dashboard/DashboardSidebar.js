import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import DashboardSidebarItem from './DashboardSidebarItem';

import './DashboardSidebar.css';

function DashboardSidebar(props) {
    let dashboardSidebarClassName = 'dashboard-sidebar';
    if (props.open) {
        dashboardSidebarClassName += ' dashboard-sidebar--open';
    }

    return (
        <Drawer className={dashboardSidebarClassName} variant="permanent" open={props.open}>
            <Toolbar
                className="dashboard-sidebar__toolbar"
            >
                <IconButton onClick={props.toggleOpen}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <DashboardSidebarItem
                    section="Bar Chart"
                    to="/bar-chart"
                >
                    <DashboardIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Pie Chart"
                    to="/pie-chart"
                >
                    <ShoppingCartIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Radar Chart"
                    to="/radar-chart"
                >
                    <PeopleIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Radial Bar Chart"
                    to="/radial-bar-chart"
                >
                    <BarChartIcon />
                </DashboardSidebarItem>
                <DashboardSidebarItem
                    section="Calendar Chart"
                    to="/calendar-chart"
                >
                    <LayersIcon />
                </DashboardSidebarItem>
            </List>
        </Drawer>
    )
}

export default DashboardSidebar;
