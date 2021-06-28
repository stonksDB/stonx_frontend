import React, { useContext } from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";
import routes, { PAGES, RENDER } from "../routes";
import ReducedHeader from "./header/ReducedHeader";
import { UserStateContext } from "../context/UserStateContext";
import CookieBanner from "./user/CookieBanner";

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
    header: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    headerWithoutNavbar: {
      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    page: {
      width: "100%",
      padding: theme.spacing(3),
    },
  })
);

const PageContainer = (props) => {
  const { userState, isLoggedIn, cookies } = useContext(UserStateContext);
  const navbarRoutes = routes
    .filter(({ name }) =>
      (isLoggedIn()
        ? [PAGES.HOME, PAGES.MY_STOCKS, PAGES.NEWS, PAGES.ABOUT]
        : [PAGES.HOME, PAGES.NEWS, PAGES.ABOUT]
      ).includes(name)
    )
    .reverse();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.renderHeader === RENDER.REDUCED && (
        <ReducedHeader
          className={
            props.renderNavbar === RENDER.FULL
              ? classes.header
              : classes.headerWithoutNavbar
          }
        />
      )}

      <Hidden mdUp>
        {props.renderHeader === RENDER.FULL && (
          <HeaderMobile userState={userState} isLoggedIn={isLoggedIn} />
        )}
        {props.renderNavbar === RENDER.FULL && (
          <NavBarMobile
            className={classes.drawer}
            availableRoutes={navbarRoutes}
          />
        )}
      </Hidden>

      <Hidden smDown>
        {props.renderHeader === RENDER.FULL && (
          <Header
            className={
              props.renderNavbar === RENDER.FULL
                ? classes.header
                : classes.headerWithoutNavbar
            }
            userState={userState}
            header={props.header}
            isLoggedIn={isLoggedIn}
          />
        )}
        {props.renderNavbar === RENDER.FULL && (
          <NavBar
            className={classes.drawer}
            paper={classes.drawerPaper}
            toolbar={classes.toolbar}
            availableRoutes={navbarRoutes}
          />
        )}
      </Hidden>

      {!cookies && <CookieBanner />}
  

      <main className={classes.page}>
        {(props.renderHeader === RENDER.FULL ||
          props.renderHeader === RENDER.REDUCED) && (
          <div className={classes.toolbar} />
        )}
        {props.page}
        <Hidden mdUp>
          {props.renderNavbar === RENDER.FULL && (
            <div className={classes.toolbar} />
          )}
        </Hidden>
      </main>
    </div>
  );
};

export default PageContainer;
