import { Course } from "../models/Course";
import { getRandomNumber } from "../util/random";
import CoursesService from "./CoursesService";
export default class CoursesServiceArray implements CoursesService {
    courses: Course[] = []
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        this.courses.push(course);
    }
    remove(id: number): void {
        const index = this.getIndex(id);
        this.courses.splice(index, 1);
    }
   private getIndex(id: number): number {
        const index = this.courses.findIndex(c => c.id === id);
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
        this.courses[index] = course;
    }
    get(): Course[] {
        return this.courses.slice();
    }
    
}