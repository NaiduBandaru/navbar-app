// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Library from './pages/Library';
import Faculty from './pages/Faculty';
import Attendance from './pages/Attendance';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';
import JoinNow from './pages/JoinNow';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/library" component={Library} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/blog" component={Blog} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/join" component={JoinNow} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
