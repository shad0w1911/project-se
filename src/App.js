import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
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
          <Link exact path="/" component={Home}/>
          <Link path="/About" component={About} />
          <Link path="/Services" component={Services} />
          <Link path="/Projects" component={Projects} />
          <Link path="/Partners" component={Partners} />
          <Link path="/Contact" component={Contact} />
          <Link component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
