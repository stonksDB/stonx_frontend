import React from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";
import { useLocation } from "react-router";
import routes from "../routes";

const userData = {
  firstName: "Mario",
  lastName: "Rossi",
  email: "mario@rossi.it",
  picture: "/broken-image.jpg",
};
const isLoggedIn = !true;
const availableRoutes = routes()
  .filter(({ name }) => (isLoggedIn ? ["Home", "My Stocks", "News", "About" ] : ["Home",  "News", "About"]).includes(name))
  .reverse();
const stocksData = [
  { name: "Stock 1" },
  { name: "Stock 2" },
  { name: "Stock 3" },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      marginTop: 10,
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    appBarWithoutMenu: {
      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const PageContainer = (props) => {
  const location = useLocation();

  const onLoginScreen =
    ["/login", "/registration"].indexOf(location.pathname) === -1;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <HeaderMobile
          className={classes.appBar}
          userData={userData}
          stocksData={stocksData}
          isLoggedIn={isLoggedIn}
        />
        <NavBarMobile
          className={classes.drawer}
          isLoggedIn={isLoggedIn}
          availableRoutes={availableRoutes}
        />
      </Hidden>

      <Hidden xsDown>
        <Header
          className={onLoginScreen ? classes.appBar : classes.appBarWithoutMenu}
          userData={userData}
          stocksData={stocksData}
          loginScreen={onLoginScreen}
          isLoggedIn={isLoggedIn}
        />
        {onLoginScreen ? (
          <NavBar
            className={classes.drawer}
            paper={classes.drawerPaper}
            toolbar={classes.toolbar}
            isLoggedIn={isLoggedIn}
            availableRoutes={availableRoutes}
          />
        ) : (
          ""
        )}
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.page}
      </main>
    </div>
  );
};

export default PageContainer;
