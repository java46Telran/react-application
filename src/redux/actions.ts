import { PayloadAction } from "@reduxjs/toolkit";
import { ClientData } from "../models/ClientData";
import { Course } from "../models/Course";

export const ADD_COURSE_ACTION = "course/add";
export const REMOVE_COURSE_ACTION = "course/remove";
export const UPDATE_COURSE_ACTION = "course/update";
export const AUTH_ACTION = "auth";
export function addCourse(course: Course): PayloadAction<Course> {
    return {payload: course, type: ADD_COURSE_ACTION};
}
export function removeCourse(id: number): PayloadAction<number> {
    return {payload: id, type: REMOVE_COURSE_ACTION};
}
export function updateCourse(course: Course): PayloadAction<Course> {
    return {payload: course, type: UPDATE_COURSE_ACTION};
}
export function authAction(clientData: ClientData): PayloadAction<ClientData> {
    return {payload: clientData, type: AUTH_ACTION};
}