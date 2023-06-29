import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Innovation from "./Pages/Innovation";
import Main from './Pages/Main';
// import Test from './Test/Test';
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Main/>
    //     </Route>
    //     <Route exact path="/innovation">
    //       <Innovation/>
    //     </Route>
    //   </Switch>
    // </Router> 
      // <Main/>
    <Innovation/>
  );
}

export default App;
