import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from "./routes"


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              {routes().map(({name, path, icon, page}) => (
                <Route key={path} path={path}>
                    {page}
                </Route>
              ))}
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
