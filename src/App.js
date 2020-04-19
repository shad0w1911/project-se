import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';
import { About } from './About';
import { Partners } from './Partners';
import { Projects } from './Projects';

function App() {
  return (
    <React.Fragment>
    <ParallaxProvider>
    <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/partners" component={Partners} />
          <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
