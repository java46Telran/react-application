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
        const index = this.getIndex(id);
        courses.splice(index, 1);
    }
   private getIndex(id: number): number {
        const index = courses.findIndex(c => c.id === id);
        if (index < 0) {
            throw `course with id ${id} doesn't exist`
        }
        return index;
    }
    update(id: number, course: Course): void {
        const index = this.getIndex(id);
        if (id !== course.id) {
            throw `No match of id ${id} with course.id ${course.id}`;
        }
        courses[index] = course;
    }
    get(): Course[] {
        return courses;
    }
    
}