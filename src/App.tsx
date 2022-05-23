import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {  COURSES_PATH, LOGIN_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';
import { useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { Course } from './models/Course';
import { ClientData } from './models/ClientData';
import { RouteType } from './models/RouteType';

const App: React.FC = () => {
  const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
  //useImitator();
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true); 
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData])
  React.useEffect(() => setFlNavigate(false), [])
return <BrowserRouter>
<Navigator items={relevantItems} />
{flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : 
<Navigate to={LOGIN_PATH}></Navigate>)}
<Routes>
  {getRoutes(relevantItems)}
  
</Routes> 
</BrowserRouter> 

 
}

export default App;
function getRoutes(relevantItems: RouteType[]): React.ReactNode {
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}

function getRelevantItems(clientData: ClientData): RouteType[] {
  //TODO for admin
  return ROUTES.filter(r => (!!clientData.email && r.authenticated ) ||
   (!clientData.email && !r.authenticated && !r.administrator) || (clientData.isAdmin && r.administrator))
}

