import React from "react";
import { coursesService } from "../../config/service-config";
const Courses: React.FC = () =>
{
    //TODO
    //using method get of CoursesService (imported variable coursesService)
    //<ul> {courses as <li> elements} each li presents JSON of one course
    return <ul>
        {coursesService.get().map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}
    </ul>
}
export default Courses;