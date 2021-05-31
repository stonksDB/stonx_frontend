import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import routes from "./routes";
import { ThemeVariantProvider } from "./theme";
import PageContainer from "./components/PageContainer";

ReactDOM.render(
  <React.StrictMode>
    <ThemeVariantProvider>
      <HashRouter>
        <Switch>
          {routes.map(({ path, page, renderHeader, renderNavbar }) => (
            <Route key={path} path={path}>
              <PageContainer page={page} renderHeader={renderHeader} renderNavbar={renderNavbar}/>
            </Route>
          ))}
        </Switch>
      </HashRouter>
    </ThemeVariantProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
