import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import routes from "./routes";
import PageContainer from "./components/PageContainer";
import { ThemeVariantProvider } from "./context/ThemeVariantContext";
import { UserStateProvider } from "./context/UserStateContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeVariantProvider>
      <UserStateProvider>
        <HashRouter>
          <Switch>
            {routes.map(({ path, page, header, navBar }) => (
              <Route key={path} path={path}>
                <PageContainer page={page} renderHeader={header} renderNavbar={navBar}/>
              </Route>
            ))}
          </Switch>
        </HashRouter>
      </UserStateProvider>
    </ThemeVariantProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
