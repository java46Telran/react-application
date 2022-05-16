import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { DataGrid, GridColumns, GridRowParams, GridActionsCellItem } from '@mui/x-data-grid'
import { Box, Paper } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { removeCourse, updateCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
function getActions(actionsFn: (params: GridRowParams)=>JSX.Element[]): GridColumns {
    const columns: GridColumns = [
    { field: "name", type: "string", headerName: "Course Name", align: "center", headerAlign: "center", flex:1 },
    { field: "lecturer", type: "string", headerName: "Lecturer", align: "center", headerAlign: "center", flex: 0.7 },
    { field: "hours", type: "number", headerName: "Hours", align: "right", headerAlign: "center", flex: 0.5 },
    { field: "cost", type: "number", headerName: "Cost", align: "right", headerAlign: "center", flex: 0.6 },
    { field: "openingDate", type: "date", headerName: "Date", align: "center", headerAlign: "center", flex: 0.7 },
    { field: "actions", type: "actions", flex: 0.5, getActions:actionsFn}

]
return columns
}

const Courses: React.FC = () => {
    const dispatch = useDispatch()
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const [isEdit, setEdit] = React.useState(false);
    const updatedCourse = React.useRef<Course>()
    function actionsFn(params: GridRowParams): JSX.Element[] {
        const actionElements: JSX.Element[] = [
            <GridActionsCellItem label="Remove" onClick={() => dispatch(removeCourse(params.id as number))}
             icon={<Delete/>}/>,
             <GridActionsCellItem label="Edit" onClick={() => editFn(params.id as number)} icon={<Edit/>}/>
        ]
        return actionElements;
    }
    function editFn(id: number) {
        updatedCourse.current = courses.find(c => c.id === id)
        setEdit(true);
    }
    const getActionsCallback = useCallback(getActions, [courses]);
    const columns = getActionsCallback(actionsFn);
    return <Box sx={{display: 'flex', justifyContent: 'center' }}><Paper sx={{height: {xs: '90vh', sm: '85vh', md: '80vh'}, width: {xs: '100%', md: '80%'}}}>
        {isEdit ? <CourseForm submitFn={(course) => {
            setEdit(false); dispatch(updateCourse(course))}}
             courseUpdate={updatedCourse.current}/> : <DataGrid rows={courses} columns={columns} />}
    </Paper></Box>

}
export default Courses;