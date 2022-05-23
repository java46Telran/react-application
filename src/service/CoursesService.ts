import { Course } from "../models/Course";

export default interface CoursesService {
    add(course: Course):Promise<void>;
    remove(id: number): Promise<void>;
    update(id: number, course: Course): Promise<void>;
    get(): Promise<Course[]>;
}