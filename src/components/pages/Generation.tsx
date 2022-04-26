import React, { useEffect } from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { range } from "../../util/functions";
import { getRandomCourse } from "../../util/randomCourse";
const INPUT_GENERATION_ID = "input-generation-id"
let inputElement:any;
const Generation: React.FC = () =>
{
    //TODO 
    //input element for inputting number of the courses
    //using method add of CoursesService (imported variable coursesService)
    //this component adds inputed number of the random courses
    function onInput() {
       const nCourses: number = +inputElement.value;
       range(0, nCourses).forEach(i => coursesService.add(getRandomCourse(courseData)))
    }
    useEffect(() => {
        inputElement = document.getElementById(INPUT_GENERATION_ID);
    }, [])
    return <div>
        <input id={INPUT_GENERATION_ID} type="number"/>
        <button onClick={onInput}>generate</button>
    </div>
}
export default Generation;