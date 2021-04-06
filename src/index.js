import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./index.css";
import routes from "./routes";
import lightTheme from "./theme";
import PageContainer from "./components/PageContainer";
import About from "./screens/About";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          <Route key="/about" path="/about">
            <About />
          </Route>
          {routes().map(({ path, page }) => (
            <Route key={path} path={path}>
              <PageContainer page={page} />
            </Route>
          ))}
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
