import React from "react";
import { coursesService } from "../../config/service-config";
import { getMinMaxAvgByField } from "../../util/functions";
const StatisticCost: React.FC = () =>
{
    //TODO 
    //you may apply the "lodash" library
    //using method get of CoursesService (imported variable coursesService)
    //this component outputs three labels:
    //first lable contains maximal cost from all courses
    //second lable contains minimal cost from all courses
    //third label contains average cost from all courses
    const statObj = getMinMaxAvgByField(coursesService.get(), 'cost');
    return <div style={{fontSize: "1.5em", display: 'flex', justifyContent: 'space-evenly'}}>
        <label>min cost = {statObj.min}</label>
        <label>max cost = {statObj.max}</label>
        <label>avg cost = {statObj.avg}</label>
    </div>
}
export default StatisticCost;