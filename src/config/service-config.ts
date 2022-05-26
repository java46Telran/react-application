import AuthServiceClient from "../service/AuthServiceClient";
import CoursesServiceArray from "../service/CoursesServiceArray";
import CoursesServiceRest from "../service/CoursesServiceRest";

export const coursesService = new CoursesServiceRest('http://localhost:3500/courses');
export const authService = new AuthServiceClient();