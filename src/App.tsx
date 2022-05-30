import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {  COURSES_PATH, LOGIN_PATH, LOGOUT_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { Course } from './models/Course';
import { ClientData, emptyClientData } from './models/ClientData';
import { RouteType } from './models/RouteType';
import { coursesService } from './config/service-config';
import { authAction, setCourses, setOperationCode } from './redux/actions';
import { OperationCode } from './models/OperationCode';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
  const operationCode: OperationCode = useSelector<StateType, OperationCode> (state=>state.operationCode);
  //useImitator();
  useEffect(() => {
    coursesService.get().then(courses => {
      dispatch(setCourses(courses));
      dispatch(setOperationCode(OperationCode.OK))
    }).catch(err => dispatch(setOperationCode(err)))
  },[operationCode, clientData])
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true); 
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData])
  React.useEffect(() => setFlNavigate(false), [])
  function operationCodeHandler() {
    if (operationCode == OperationCode.AUTH_ERROR) {
      dispatch(authAction(emptyClientData));
    }
    //TODO
  }
  const operationCodeCallback = React.useCallback(operationCodeHandler, [operationCode]);
  operationCodeCallback();

return <BrowserRouter>
<Navigator items={relevantItems} />
{flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : 
<Navigate to={LOGIN_PATH}></Navigate>)}
<Routes>
  {getRoutes(relevantItems, clientData)}
  
</Routes> 
</BrowserRouter> 

 
}

export default App;
function getRoutes(relevantItems: RouteType[], clientData: ClientData): React.ReactNode {
  const logoutRoute = relevantItems.find(ri => ri.path === LOGOUT_PATH);
  if (logoutRoute) {
    logoutRoute.label = clientData.displayName;
  }
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}

function getRelevantItems(clientData: ClientData): RouteType[] {
  //TODO for admin
  return ROUTES.filter(r => (!!clientData.email && r.authenticated ) ||
   (!clientData.email && !r.authenticated && !r.administrator) || (clientData.isAdmin && r.administrator))
}

