import React from "react";
import { coursesService } from "../../config/service-config";
import { getMinMaxAvgByField } from "../../util/functions";
const StatisticHours: React.FC = () =>
{
    //TODO 
    //you may apply the "lodash" library
    //using method get of CoursesService (imported variable coursesService)
    //this component outputs three labels:
    //first lable contains maximal hours from all courses
    //second lable contains minimal hours from all courses
    //third label contains average hours from all courses
    const statObj = getMinMaxAvgByField(coursesService.get(), 'hours');
    return <div style={{fontSize: "1.5em", display: 'flex', justifyContent: 'space-evenly'}}>
        <label>min hours = {statObj.min}</label>
        <label>max hours = {statObj.max}</label>
        <label>avg hours = {statObj.avg}</label>
    </div>
}
export default StatisticHours;