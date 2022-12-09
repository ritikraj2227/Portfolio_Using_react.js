import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
     
      <Router>
        <Navbar />
        <Switch> 
                 
          <Route exact path="/home" component={ Home } />
          <Route path="/about" component={About } />                    
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />          
          <Redirect to="/" />

        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
