import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { coursesService } from "../config/service-config";
import { ClientData, emptyClientData } from "../models/ClientData";
import { Course } from "../models/Course";
import {  AUTH_ACTION, SET_COURSES_ACTION} from "./actions";

export const coursesReducer:Reducer<Course[], PayloadAction<Course[]>> =
 (courses = [], action):Course[] => {
     return action.type === SET_COURSES_ACTION ? action.payload : courses;
}
export const clientDataReducer: Reducer<ClientData, PayloadAction<ClientData>> = 
(clientData = emptyClientData, action): ClientData => {
   
    return action.type === AUTH_ACTION ? action.payload : clientData;
}