import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import { Course } from "../../models/Course";
const AddCourse: React.FC = () =>
{
   const dispatch = useDispatch();
   function onSubmit(course: Course) {
       console.log(course);
       dispatch(addCourse(course));
   }
    return <CourseForm submitFn={onSubmit}></CourseForm>
}
export default AddCourse;