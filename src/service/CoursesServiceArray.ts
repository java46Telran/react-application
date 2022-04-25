import { Course } from "../models/Course";
import CoursesService from "./CoursesService";
import { courses } from "../config/service-config";
import { getRandomNumber } from "../util/random";
export default class CoursesServiceArray implements CoursesService {
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        courses.push(course);
    }
    remove(id: number): void {
        //TODO
    }
    update(id: number, course: Course): void {
        //TODO
    }
    get(): Course[] {
        return courses;
    }
    
}