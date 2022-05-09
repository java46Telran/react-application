import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {  COURSES_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';
import { useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { Course } from './models/Course';

const App: React.FC = () => {
 
  //useImitator();
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true); 
  React.useEffect(() => setFlNavigate(false), [])
return <BrowserRouter>
<Navigator items={ROUTES} />
{flNavigate && <Navigate to={COURSES_PATH}></Navigate>}
<Routes>
  {getRoutes()}
  
</Routes> 
</BrowserRouter> 

 
}

export default App;
function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}

