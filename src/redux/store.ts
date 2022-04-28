import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { Course } from "../models/Course"
import { coursesReducer } from "./reducers"

export type StateType = {
    courses: Course[]
}
const reducer = combineReducers<StateType> ({
   courses: coursesReducer as any
})
export const store = configureStore({reducer})