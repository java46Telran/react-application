import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { COURSES_PATH, LOGIN_PATH, LOGOUT_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { ClientData, emptyClientData } from './models/ClientData';
import { RouteType } from './models/RouteType';
import { coursesService } from './config/service-config';
import { authAction, setCourses, setOperationCode } from './redux/actions';
import { OperationCode } from './models/OperationCode';
import { Box, Alert, LinearProgress } from '@mui/material';
import courseData from './config/courseData.json'
const SERVER_UNAVAILABLE_MESSAGE = `server is unavailable;
  waiting for retry period ${(courseData as any).retryPeriod / 1000} seconds `
const UNKNOWN_ERROR_MESSAGE = `unknown error; contact the application staff courses.admin@tel-ran.com`

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [flAlert, setAlert] = React.useState(false);
  const flUnknown = React.useRef(false);
  const alertMessage = React.useRef('');
  
  
  const clientData: ClientData = useSelector<StateType, ClientData>(state => state.clientData);
  const operationCode: OperationCode = useSelector<StateType, OperationCode>(state => state.operationCode);
  //useImitator();
  useEffect(() => {
    getData(dispatch);
  }, [operationCode, clientData])
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData])
  React.useEffect(() => setFlNavigate(false), [])
  const intervalId = useRef<any>();
  function operationCodeHandler() {
    clearInterval(intervalId.current);
    if (operationCode === OperationCode.AUTH_ERROR) {
      dispatch(authAction(emptyClientData));
    } else if (operationCode === OperationCode.SERVER_UNAVAILABLE) {
      setAlert(true);
      flUnknown.current = false;
      alertMessage.current = SERVER_UNAVAILABLE_MESSAGE;
      intervalId.current = setInterval(getData, (courseData as any).retryPeriod, dispatch);
    } else if (operationCode === OperationCode.UNKNOWN) {
      setAlert(true);
      flUnknown.current = true;
      alertMessage.current = UNKNOWN_ERROR_MESSAGE;
    } else {
      setAlert(false);
    }
  }

  const operationCodeCallback = React.useCallback(operationCodeHandler, [operationCode]);
  React.useEffect(() => {
    operationCodeCallback();
  }, [operationCodeCallback])

  return <Box>
    {flAlert ? <Box>
      <Alert severity='error'>
        {alertMessage.current}
      </Alert>
      {!flUnknown.current && <LinearProgress />}
    </Box> : <BrowserRouter>
      <Navigator items={relevantItems} />
      {flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> :
        <Navigate to={LOGIN_PATH}></Navigate>)}
      <Routes>
        {getRoutes(relevantItems, clientData)}
      </Routes>
    </BrowserRouter>}
  </Box>


}

export default App;
function getData(dispatch: any) {
  coursesService.get().then(courses => {
    dispatch(setCourses(courses));
    dispatch(setOperationCode(OperationCode.OK));
  }).catch(err => dispatch(setOperationCode(err)));
}

function getRoutes(relevantItems: RouteType[], clientData: ClientData): React.ReactNode {
  const logoutRoute = relevantItems.find(ri => ri.path === LOGOUT_PATH);
  if (logoutRoute) {
    logoutRoute.label = clientData.displayName;
  }
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element} />)
}

function getRelevantItems(clientData: ClientData): RouteType[] {
  //TODO for admin
  return ROUTES.filter(r => (!!clientData.email && r.authenticated) ||
    (!clientData.email && !r.authenticated && !r.administrator)
     || (clientData.isAdmin && r.administrator))
}

