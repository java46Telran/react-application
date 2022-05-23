import AuthServiceClient from "../service/AuthServiceClient";
import CoursesServiceArray from "../service/CoursesServiceArray";

export const coursesService = new CoursesServiceArray();
export const authService = new AuthServiceClient();