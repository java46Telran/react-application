import React from 'react';
import { RouteType } from '../../models/RouteType';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, ListItem, Toolbar, Typography, Drawer, List } from '@mui/material';
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    
    const [flOpen, setOpen] = React.useState<boolean>(false);
   
   
    function toggleOpen() {
        setOpen(!flOpen);
    }
    function getListItems(): React.ReactNode {
        return items.map(i => <ListItem onClick={toggleOpen} component={RouterLink} to={i.path} key={i.path}>{i.label}</ListItem>)
    }
    return <AppBar position="fixed">
        <Toolbar><IconButton onClick={toggleOpen} style={{color: 'white'}}>
            <MenuIcon/>
        </IconButton>
        <Typography >Courses Application</Typography>
        <Drawer open={flOpen} onClose={toggleOpen} anchor="left">
            <List>
                {getListItems()}
            </List>
        </Drawer></Toolbar>
    </AppBar>
}
export default NavigatorMobile;
