import React from "react";
import { useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
const Courses: React.FC = () =>
{
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    return <ul>
        {courses.map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}
    </ul>
}
export default Courses;