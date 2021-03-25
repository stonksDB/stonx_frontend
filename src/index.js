import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import { MuiThemeProvider} from "@material-ui/core/styles";
import './index.css';
import routes from "./routes"
import lightTheme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router>
          <Switch>
              {routes().map(({path, page}) => (
                <Route key={path} path={path}>
                    {page}
                </Route>
              ))}
          </Switch>
      </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
