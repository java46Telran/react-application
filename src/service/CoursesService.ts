import { Course } from "../models/Course";
import {Observable} from 'rxjs';
import { OperationCode } from "../models/OperationCode";

export default interface CoursesService {
    add(course: Course):Promise<void>;
    remove(id: number): Promise<void>;
    update(id: number, course: Course): Promise<void>;
    get(): Promise<Course[]>;
    getObservableData(): Observable<Course[] | OperationCode>;
}