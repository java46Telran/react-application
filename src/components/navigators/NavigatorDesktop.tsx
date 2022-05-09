import { AppBar, Tab } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { RouteType } from '../../models/RouteType';
import { getRouteIndex } from '../../util/functions';
const NavigatorDesktop: React.FC<{ items: RouteType[] }> = ({ items }) => {
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location])
    const tabNumber = getRouteIndexCallback(items, location.pathname);
    
    function getTabs(): React.ReactNode {
        return items.map(item => <Tab style={{color: 'white'}} key={item.path} component={RouterLink} to={item.path} label={item.label} />)
    }
    return <AppBar position={'fixed'}><Tabs indicatorColor='secondary' value={tabNumber} >
        {getTabs()}

    </Tabs></AppBar>
}
export default NavigatorDesktop;
