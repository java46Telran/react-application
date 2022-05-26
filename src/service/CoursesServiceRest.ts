import { Course } from "../models/Course";
import CoursesService from "./CoursesService";
export default class CoursesServiceRest implements CoursesService {
    constructor(private url: string){
        console.log(url)
    }
    async add(course: Course): Promise<void> {
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(course)
        });
    }
    async remove(id: number): Promise<void> {
        await fetch(this.getUrlId(id), {
            method: "DELETE"
        })
    }
    private getUrlId(id: number): RequestInfo {
        return `${this.url}/${id}`;
    }
    async update(id: number, course: Course): Promise<void> {
        await fetch(this.getUrlId(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(course)
            
        })
    }
    async get(): Promise<Course[]> {
      
        const request =  await fetch(this.url);
        return await request.json().then((courses: Course[]) => courses.map(c =>
            ({...c, openingDate: new Date(c.openingDate)})) )
         
    }
    
}