import { Course } from "../models/Course";
import { AUTH_TOKEN_ITEM } from "./AuthServiceJwt";
import CoursesService from "./CoursesService";
function getHeaders(): any {
    return {Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN_ITEM),
"Content-Type": "application/json"}
}
export default class CoursesServiceRest implements CoursesService {
    constructor(private url: string){
        console.log(url)
    }
    async add(course: Course): Promise<void> {
        (course as any).userId = 1;
        await fetch(this.url, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(course)
        });
    }
    async remove(id: number): Promise<void> {
        await fetch(this.getUrlId(id), {
            method: "DELETE",
            headers: getHeaders()
        })
    }
    private getUrlId(id: number): RequestInfo {
        return `${this.url}/${id}`;
    }
    async update(id: number, course: Course): Promise<void> {
        await fetch(this.getUrlId(id), {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(course)
            
        })
    }
    async get(): Promise<Course[]> {
      
        const request =  await fetch(this.url, {
            headers: getHeaders()
        });
        return await request.json().then((courses: Course[]) => courses.map(c =>
            ({...c, openingDate: new Date(c.openingDate)})) )
         
    }
    
}