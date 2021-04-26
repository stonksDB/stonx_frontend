import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import routes from "./routes";
import lightTheme from "./theme";
import PageContainer from "./components/PageContainer";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          {routes.map(({ path, page, renderHeader, renderNavbar }) => (
            <Route key={path} path={path}>
              <PageContainer page={page} renderHeader={renderHeader} renderNavbar={renderNavbar}/>
            </Route>
          ))}
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
