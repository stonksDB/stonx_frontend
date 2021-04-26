import React from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";
import routes, { PAGES } from "../routes";

const userData = {
  firstName: "Mario",
  lastName: "Rossi",
  email: "mario@rossi.it",
  picture: "/broken-image.jpg",
};
const isLoggedIn = false;
const navbarRoutes = routes
  .filter(({ name }) =>
    (isLoggedIn ? [PAGES.HOME, PAGES.MY_STOCKS, PAGES.NEWS, PAGES.ABOUT] : [PAGES.HOME, PAGES.NEWS, PAGES.ABOUT]).includes(name))
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
    appBarWithoutNavbar: {
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        {props.renderHeader ? (
          <HeaderMobile
            className={classes.appBar}
            userData={userData}
            stocksData={stocksData}
            isLoggedIn={isLoggedIn}
          />
        ) : ("")}
        {props.renderNavbar ? (
          <NavBarMobile
            className={classes.drawer}
            isLoggedIn={isLoggedIn}
            availableRoutes={navbarRoutes}
          />
        ) : ("")}
      </Hidden>

      <Hidden xsDown>
        {props.renderHeader ? (
          <Header
            className={props.renderNavbar ? classes.appBar : classes.appBarWithoutNavbar}
            userData={userData}
            stocksData={stocksData}
            renderHeader={props.renderHeader}
            isLoggedIn={isLoggedIn}
          />
        ) : ("")}
        {props.renderNavbar ? (
          <NavBar
            className={classes.drawer}
            paper={classes.drawerPaper}
            toolbar={classes.toolbar}
            isLoggedIn={isLoggedIn}
            availableRoutes={navbarRoutes}
          />
        ) : ("")}
      </Hidden>

      <main className={classes.content}>
        {props.renderHeader ? <div className={classes.toolbar} /> : ""}
        {props.page}
      </main>
    </div>
  );
};

export default PageContainer;
