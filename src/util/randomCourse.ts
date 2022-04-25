
import { createCourse } from "../models/Course";
import { getRandomDate, getRandomNumber, getRandomElement } from "./random";
export function getRandomCourse(courseData: any) {
    const {minId, maxId,lectors,courses, minHours, maxHours, minCost, maxCost, minYear, maxYear} = courseData;
    const id = getRandomNumber(minId, maxId);
    const lecturer = getRandomElement(lectors);
    const name = getRandomElement(courses);
    const hours = Math.round(getRandomNumber(minHours, maxHours) / 10) * 10;
    const cost = Math.round(getRandomNumber(minCost, maxCost) / 100) * 100;
    const openingDate = getRandomDate(minYear, maxYear);
    return createCourse(id,name,lecturer, hours, cost,openingDate);
}