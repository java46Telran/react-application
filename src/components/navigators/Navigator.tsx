import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { Link} from "react-router-dom";
import { RouteType } from "../../models/RouteType";
import NavigatorDesktop from "./NavigatorDesktop";
import NavigatorMobile from "./NavigatorMobile";
const Navigator: React.FC<{items:RouteType[]}> = ({items}) => {
    const isLaptopOrDesktop = useMediaQuery('(min-width: 900px)');
    return <Box sx={{marginTop: {
        xs:'10vh', sm: '10vw', md: '10vh'
    }}}>
        {isLaptopOrDesktop ? <NavigatorDesktop items={items}/> : <NavigatorMobile items={items}/>}
    </Box>
    
}
export default Navigator;