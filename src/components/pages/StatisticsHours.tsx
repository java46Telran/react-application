import React from "react";
import { useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { getMinMaxAvgByField } from "../../util/functions";
const StatisticHours: React.FC = () =>
{
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const statObj = getMinMaxAvgByField(courses, 'hours');
    return <div style={{fontSize: "1.5em", display: 'flex', justifyContent: 'space-evenly'}}>
        <label>min hours = {statObj.min}</label>
        <label>max hours = {statObj.max}</label>
        <label>avg hours = {statObj.avg}</label>
    </div>
}
export default StatisticHours;