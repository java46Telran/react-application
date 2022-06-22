import { ReactNode } from "react";
import AddCourse from "../components/pages/AddCourse";
import Courses from "../components/pages/Courses";
import Generation from "../components/pages/Generation";
import Login from "../components/pages/Login";
import Logout from "../components/pages/Logout";
import StatisticCost from "../components/pages/StatisticCost";
import StatisticHours from "../components/pages/StatisticsHours";
import { RouteType } from "../models/RouteType";
export const COURSES_PATH = '/';
export const ADD_COURSE_PATH ='/course/add';
export const STATISTIC_HOURS_PATH = '/statistic/hours';
export const STATISTIC_COST_PATH = '/statistic/cost';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const GENERATION_PATH = '/generation';
export const ROUTES:RouteType[] = [
    {path: COURSES_PATH, label: 'Courses', element: <Courses/>, authenticated: true},
    {path: ADD_COURSE_PATH, label: 'New Course', element: <AddCourse/>,administrator: true},
    {path: STATISTIC_HOURS_PATH, label: 'Statistics Hours', element: <StatisticHours/>, authenticated: true},
    {path: STATISTIC_COST_PATH, label: 'Statistics Cost', element: <StatisticCost/>, authenticated: true},
    {path: LOGIN_PATH, label: 'Login', element: <Login/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <Logout/>,authenticated: true},
   
]
export const DEVELOPMENT_ROUTES: RouteType[] = [
    {path: GENERATION_PATH, label: 'Generation', element: <Generation/>,administrator: true}
]
if(process.env.NODE_ENV === 'development') {
    ROUTES.push(...DEVELOPMENT_ROUTES);
  }