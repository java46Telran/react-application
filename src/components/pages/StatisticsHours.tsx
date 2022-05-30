import React from "react";
import { useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import courseData from "../../config/courseData.json"
import Statistics from "../statistics/Statistics";
const StatisticHours: React.FC = () => {
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);

    return <Statistics field={"hours"} title={"Courses Duration Statistics"} unit={"h"}
     intervals={(courseData as any).hourIntervals} objects={courses}></Statistics>
}
export default StatisticHours;