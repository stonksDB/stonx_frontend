import React from "react";
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";

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
const useStyles = (theme) => ({
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden smUp>
          <HeaderMobile
            className={classes.appBar}
            handleDrawerToggle={this.handleDrawerToggle}
            userData={userData}
            stocksData={stocksData}
          />
          <NavBarMobile
            className={classes.drawer}
            handleDrawerToggle={this.handleDrawerToggle}
            mobileOpen={this.state.mobileOpen}
          />
        </Hidden>

        <Hidden xsDown>
          <Header
            className={classes.appBar}
            handleDrawerToggle={this.handleDrawerToggle}
            userData={userData}
            stocksData={stocksData}
          />
          <NavBar
            className={classes.drawer}
            handleDrawerToggle={this.handleDrawerToggle}
            mobileOpen={this.state.mobileOpen}
            paper={classes.drawerPaper}
            toolbar={classes.toolbar}
          />

          <main className={classes.content}>
            <div className={classes.toolbar} />
            {this.props.page}
          </main>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(PageContainer);
