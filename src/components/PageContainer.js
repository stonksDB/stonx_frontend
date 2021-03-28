import React, { useState } from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";
import { useLocation } from "react-router";

const userData = {
  firstName: "Mario",
  lastName: "Rossi",
  email: "mario@rossi.it",
  picture: "/broken-image.jpg",
};
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  console.log(location);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLoginScreen = ["/login", "/registration"].indexOf(location.pathname) === -1;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <HeaderMobile
          className={classes.appBar}
          handleDrawerToggle={handleDrawerToggle}
          userData={userData}
          stocksData={stocksData}
        />
          <NavBarMobile
            className={classes.drawer}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />

      </Hidden>

      <Hidden xsDown>
        <Header
          className={onLoginScreen? classes.appBar : classes.appBarWithoutMenu}
          handleDrawerToggle={handleDrawerToggle}
          userData={userData}
          stocksData={stocksData}
          loginScreen={onLoginScreen}
        />
        { onLoginScreen ? (
          <NavBar
            className={classes.drawer}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            paper={classes.drawerPaper}
            toolbar={classes.toolbar}
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
