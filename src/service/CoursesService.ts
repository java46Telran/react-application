import { Course } from "../models/Course";

export default interface CoursesService {
    add(course: Course):void;
    remove(id: number): void;
    update(id: number, course: Course): void;
    get(): Course[];
}