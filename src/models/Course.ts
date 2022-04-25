export type Course = {
    id: number;
    name: string;
    lecturer: string;
    hours: number;
    cost: number;
    openingDate: Date
}
export function createCourse(id: number, name:string, lecturer: string,
     hours: number, cost: number, openingDate: Date): Course {
         return {cost, id, name, lecturer, hours, openingDate};
     }