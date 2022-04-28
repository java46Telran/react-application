import React from "react";
import { useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { getMinMaxAvgByField } from "../../util/functions";
const StatisticCost: React.FC = () => {
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const statObj = getMinMaxAvgByField(courses, 'cost');
    return <div>{statObj.min == 0 ? <label style={{fontSize: "2em"}}>No Data</label> : <div style={{ fontSize: "1.5em", display: 'flex', justifyContent: 'space-evenly' }}>
        <label>min cost = {statObj.min}</label>
        <label>max cost = {statObj.max}</label>
        <label>avg cost = {statObj.avg}</label>
    </div>}</div>
}
export default StatisticCost;