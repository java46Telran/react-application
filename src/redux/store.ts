import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { ClientData } from "../models/ClientData"
import { Course } from "../models/Course"
import { clientDataReducer, coursesReducer } from "./reducers"

export type StateType = {
    courses: Course[],
    clientData: ClientData
}
const reducer = combineReducers<StateType> ({
   courses: coursesReducer as any,
   clientData: clientDataReducer as any
})
export const store = configureStore({reducer})