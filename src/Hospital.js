import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom';

import LoginPage from './pages/hospital-module/LoginPage';
import MainAdmin from './pages/hospital-module/MainAdmin';
import AddManager from './pages/hospital-module/AddManager';
import ViewReception from './pages/hospital-module/ViewReception';
import { SidebarContext } from './helpers/SidebarContext';



const Hospital = () => {
  const { path, url } = useRouteMatch();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
    console.log(sidebarToggle)
  }
  console.log(path, url)
  return (
    <div>
      <Router >
        <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle, toggleSidebar }}>
          <Route exact path={`${path}/`} ><LoginPage /></Route>
          <Route path={`${path}/admin`} ><MainAdmin /></Route>
          <Route path={`${path}/addmanager`} ><AddManager /></Route>
          <Route path={`${path}/viewreception`}><ViewReception /></Route>
        </SidebarContext.Provider>
        {/* <Route  path={`${path}/registration`} ><RegistrationPage/></Route> */}
        {/* <Route  path={`${path}/registered`} ><Registered/></Route> */}
        {/* <Route  path={`${path}/unregistered`} ><Unregistered/></Route> */}

      </Router>
    </div>
  )
}

export default Hospital;