import React from 'react';
import { RouteType } from '../../models/RouteType';
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    //TODO
    //write implementation of a Navigator for mobile devices
    //Navigator should be based on Drawer
    return <div>
        <label style={{fontSize: '2em'}}>NavigatorMobile is working {items.length} items</label>
    </div>
}
export default NavigatorMobile;
