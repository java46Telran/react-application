import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { ClientData } from "../models/ClientData"
import { Course } from "../models/Course"
import { OperationCode } from "../models/OperationCode"
import { clientDataReducer, coursesReducer, operationCodeReducer } from "./reducers"

export type StateType = {
    courses: Course[],
    clientData: ClientData,
    operationCode: OperationCode
}
const reducer = combineReducers<StateType> ({
   courses: coursesReducer as any,
   clientData: clientDataReducer as any,
   operationCode: operationCodeReducer as any
})
export const store = configureStore({reducer,
     middleware: (getMiddleware) => getMiddleware({
         serializableCheck: false
     })})