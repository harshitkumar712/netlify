import React,{useState} from 'react';
import LoginPage from './pages/login-page/LoginPage';
import {BrowserRouter as Router, Route,useRouteMatch ,Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import AccountPage from './pages/account-page/AccountPage';
import RegistrationPage from './pages/registration-page/RegistrationPage';
import PharmacyPage from './pages/pharmacy-page/PharmacyPage';
import RegisteredHospital from './pages/hospital/RegisteredHospital';
import UnregisteredHospital from './pages/hospital/UnregisteredHospital';
import RegisteredPharmacy from './pages/pharmacy/RegisteredPharmacy'
import UnregisteredPharmacy from './pages/pharmacy/UnregisteredPharmacy';
import {SidebarContext} from './helpers/SidebarContext';

function Agent() {

const { path } = useRouteMatch();


  const [sidebarToggle,setSidebarToggle]=useState(false);

const handleSidebarToggle=()=>{
  setSidebarToggle(prev=>!prev);
}
const theme={
primaryColor:"#003300",
secondaryColor:"#25D366",
}
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <Router >
     {/* <Navbar toggleSidebar={toggleSidebar}/> */}
     <SidebarContext.Provider value={{sidebarToggle,handleSidebarToggle}}>
     <Switch>
    <Route exact path={`${path}/`} ><LoginPage/></Route>
    <Route  path={`${path}/account`} ><AccountPage/></Route>
    <Route  path={`${path}/registration`} ><RegistrationPage/></Route>
     <Route exact  path={`${path}/pharmacy/registration`} ><PharmacyPage/></Route>
    <Route  path={`${path}/hospital/registered`} ><RegisteredHospital/></Route>
    <Route  path={`${path}/hospital/unregistered`} ><UnregisteredHospital/></Route>
  <Route  path={`${path}/pharmacies/registered`} ><RegisteredPharmacy/></Route>
    <Route  path={`${path}/pharmacies/unregistered`} ><UnregisteredPharmacy/></Route>
    <Route  path={`${path}/*`}  ><div><h1>404</h1></div></Route>
    </Switch>
    </SidebarContext.Provider>
        </Router>
        </ThemeProvider>

    </div>
  );
}

export default Agent;
