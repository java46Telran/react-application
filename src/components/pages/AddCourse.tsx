import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
const AddCourse: React.FC = () =>
{
    //TODO
    //simple button "Add Course" triggering adding random course by using
    //method add of CoursesService (variable coursesService)
    return <button onClick={() => coursesService.add(getRandomCourse(courseData))}>Add Random Course</button>
}
export default AddCourse;