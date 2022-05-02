import { useMediaQuery } from "@mui/material";
import React from "react";
import { Link} from "react-router-dom";
import { ROUTES } from "../../config/routes-config";
import { RouteType } from "../../models/RouteType";
import NavigatorDesktop from "./NavigatorDesktop";
import NavigatorMobile from "./NavigatorMobile";
const Navigator: React.FC<{items:RouteType[]}> = ({items}) => {
    const isLaptopOrDesktop = useMediaQuery('(min-width: 900px)');
    return <div style={{marginTop: "10vh"}}>
        {isLaptopOrDesktop ? <NavigatorDesktop items={ROUTES}/> : <NavigatorMobile items={ROUTES}/>}
    </div>
    
}
export default Navigator;