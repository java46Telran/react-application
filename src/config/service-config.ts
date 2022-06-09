import AuthServiceClient from "../service/AuthServiceClient";
import AuthServiceJwt from "../service/AuthServiceJwt";
import CoursesServiceArray from "../service/CoursesServiceArray";
import CoursesServiceFirebase from "../service/CoursesServiceFirebase";
import CoursesServiceRest from "../service/CoursesServiceRest";
import courseData from '../config/courseData.json'
import AuthServiceFirebase from "../service/AuthServiceFirebase";

export const coursesService = new CoursesServiceFirebase(courseData.minId, courseData.maxId);
// export const coursesService = new CoursesServiceRest('http://localhost:3500/courses');
//export const authService = new AuthServiceJwt('http://localhost:3500/login');
export const authService = new AuthServiceFirebase();