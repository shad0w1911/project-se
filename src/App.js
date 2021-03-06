import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import  Home from "./Home";
import { NoMatch } from "./NoMatch";
import { Contact } from "./Contact";
import { About } from "./About";
import { Partners } from "./Partners";
import { Projects }  from "./Projects";
import { Footer } from "./components/Footer";
import Services from "./Services";
import Example from './projectModalDisplay';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router basename="project-se">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Example" component={Example} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
