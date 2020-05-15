import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import  NavigationBar  from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';
import { About } from './About';
import { Partners } from './Partners';
import  { Projects }  from './Projects';
import Services from './Services';

function App() {
  return (
    <React.Fragment>
    <NavigationBar/>
      <Router basename="/project-se">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
