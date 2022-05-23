import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { DataGrid, GridColumns, GridRowParams, GridActionsCellItem } from '@mui/x-data-grid'
import { Box, List, ListItem, Modal, Paper } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { removeCourse, updateCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import ActionConfirmation from "../dialogs/ActionConfirmation";
import ConfirmationData from "../../models/ConfirmationData";
import courseData from "../../config/courseData.json";
import useLayout from "../../util/useLayout";
import { ClientData } from "../../models/ClientData";
function getActions(actionsFn: (params: GridRowParams)=>JSX.Element[], layout:string): GridColumns {
    const columns: GridColumns = [
        {field: "id", type: "string", headerName: "ID", align: "center", headerAlign: "center", flex:0.5},
    { field: "name", type: "string", headerName: "Course Name", align: "center", headerAlign: "center", flex:1 },
    { field: "lecturer", type: "string", headerName: "Lecturer", align: "center", headerAlign: "center", flex: 0.7 },
    { field: "hours", type: "number", headerName: "Hours", align: "right", headerAlign: "center", flex: 0.5 },
    { field: "cost", type: "number", headerName: "Cost", align: "right", headerAlign: "center", flex: 0.6 },
    { field: "openingDate", type: "date", headerName: "Date", align: "center", headerAlign: "center", flex: 0.7 },
    { field: "actions", type: "actions", flex: 0.5, getActions:actionsFn}

]

return columns.filter(c => (courseData as any)[layout].includes(c.field));
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Courses: React.FC = () => {
    const dispatch = useDispatch<any>();
    const clientData = useSelector<StateType, ClientData>(state => state.clientData);
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const [isEdit, setEdit] = React.useState(false);
    const [flOpen, setFlOpen] = React.useState<boolean>(false);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const confirmationData = React.useRef<ConfirmationData>({title:'', content:'',confirmHandler:()=>{}});
    const updatedCourse = React.useRef<Course>();
    const shownCourse = React.useRef<Course>();
    const layout = useLayout();
    function actionsFn(params: GridRowParams): JSX.Element[] {
        const actionElements: JSX.Element[] = [
           <GridActionsCellItem label="Details" icon={<Visibility/>}
             onClick={showDetails.bind( undefined, params.id as number)}/>
             
        ]
        if (clientData.isAdmin) {
            actionElements.push(<GridActionsCellItem label="Edit" onClick={() => editFn(params.id as number)}
             icon={<Edit/>}/>,
             <GridActionsCellItem label="Remove" onClick={() => showRemoveConfirmation(params.id as number)}
             icon={<Delete/>}/>)
        }
        return actionElements;
    }
    function showDetails(id: number) {
        shownCourse.current = courses.find(c => c.id === id);
        setModalOpen(true);
    }
    
    function showRemoveConfirmation(id: number) {
        confirmationData.current.confirmHandler = removeAction.bind(undefined, id);
        confirmationData.current.title = 'Remove Course Confirmation'
        confirmationData.current.content = `You are going to remove course with id ${id}`;
        setFlOpen(true);

    }
    function removeAction(id: number, flConfirm: boolean): void {
        if (flConfirm) {
            dispatch(removeCourse(id))
        }
        setFlOpen(false)
    }
    function editFn(id: number) {
        updatedCourse.current = courses.find(c => c.id === id)
        setEdit(true);
    }
    function showUpdateConfirmation(course: Course) {
        if(isUpdated(courses, course)) {
            confirmationData.current.confirmHandler = updateAction.bind(undefined, course);
            confirmationData.current.title = 'Update Course Confirmation'
            confirmationData.current.content = `You are going to update course with id ${course.id}`;
            setFlOpen(true);
        }
        setEdit(false);
        
    }
   
    function updateAction(course: Course, flConfirm: boolean): void {
        if (flConfirm) {
            dispatch(updateCourse(course))
        }
        setFlOpen(false);
        

    }
    const getActionsCallback = useCallback(getActions, [courses, layout]);
    const columns = getActionsCallback(actionsFn, layout);
    return <Box sx={{display: 'flex', justifyContent: 'center' }}><Paper sx={{height: {xs: '90vh', sm: '85vh', md: '80vh'}, width: {xs: '100%', md: '80%'}}}>
        {isEdit ? <CourseForm submitFn={showUpdateConfirmation}
             courseUpdate={updatedCourse.current}/> : <DataGrid rows={courses} columns={columns} />}
    </Paper>
    <ActionConfirmation open={flOpen} title={confirmationData.current.title}
     content={confirmationData.current.content} confirmHandler={confirmationData.current.confirmHandler}/>
     <Modal
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List>
              {shownCourse.current && Object.entries(shownCourse.current as any).map(e => <ListItem key={e[0]}>{`${e[0]}: ${e[1]}`}</ListItem>)}
          </List>
        </Box>
      </Modal>
    </Box>

}
export default Courses;

function isUpdated(courses: Course[], newCourse: Course): boolean {
    const courseOld = courses.find(c => c.id === newCourse.id);
    const courseOldJson = JSON.stringify(courseOld);
    const courseNewJson = JSON.stringify(newCourse);
   return !!courseOld && courseOldJson !== courseNewJson ; 

}
