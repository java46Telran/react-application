import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
const AddCourse: React.FC = () =>
{
   const dispatch = useDispatch();
    return <button onClick={() => dispatch(addCourse(getRandomCourse(courseData)))}>Add Random Course</button>
}
export default AddCourse;