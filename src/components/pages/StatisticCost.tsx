import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import courseData from "../../config/courseData.json"
import Statistics from "../statistics/Statistics";
const StatisticCost: React.FC = () => {
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);

    return <Statistics field={"cost"} title={"Courses Cost Statistics"} unit={"ILS"}
     intervals={(courseData as any).costIntervals} objects={courses}></Statistics>
}
export default StatisticCost;