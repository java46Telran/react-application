import React from "react";
import { Link } from "react-router-dom";
import { RouteType } from "../../models/RouteType";
const Navigator: React.FC<{items:RouteType[]}> = ({items}) => {
    function getLinks(): React.ReactNode {
        return items.map(item => <Link to={item.path} key={item.path}>{item.label}</Link>)
    }
    return <nav style={{display: 'flex', justifyContent: 'space-evenly', fontSize: '1.5em'}}>
        {getLinks()}
    </nav>
}
export default Navigator;