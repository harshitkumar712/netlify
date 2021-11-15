import React from 'react';
import Agent from './Agent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Hospital from './Hospital';

function App() {

 
  return (
    <div className="App">
    
     <Router >
    <Route exact path="/" component={Home}/>
    <Route path="/agent" component={Agent}/>
    <Route path="/hospital" component={Hospital}/>


   
    
        </Router>

    </div>
  );
}

export default App;
