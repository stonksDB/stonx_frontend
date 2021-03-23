import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./screens/Home"
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import News from "./screens/News";
import MyStocks from "./screens/MyStocks";
import SingleNews from "./screens/SingleNews";
import SingleStock from "./screens/SingleStock";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/registration">
                  <Registration />
              </Route>
              <Route path="/news">
                  <News />
              </Route>
              <Route path="/mystock">
                  <MyStocks />
              </Route>
              <Route path="/news/:id">
                  <SingleNews />
              </Route>
              <Route path="/stock/:id">
                  <SingleStock />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
