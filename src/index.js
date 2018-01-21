import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Home from  './Components/Home';
import Contacts from './Components/Contacts';
import References from './Components/References';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/references" component={References}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
