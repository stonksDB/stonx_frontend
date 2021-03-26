import React from "react";
import {Hidden, Toolbar} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import NavBar from "./navbar/NavBar";
import NavBarMobile from "./navbar/NavBarMobile";
import Header from "./header/Header";
import HeaderMobile from "./header/HeaderMobile";

const userData = {
  firstName: "Mario",
  lastName: "Rossi",
  email: "mario@rossi.it",
  picture: "/broken-image.jpg"
};
const stocksData = [
  {name: "Stock 1"},
  {name: "Stock 2"},
  {name: "Stock 3"}
];

const drawerWidth = 240;
const useStyles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingTop: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: 8
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(35)
    }
  },
});

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mobileOpen: false};
  }

  handleDrawerToggle = () => {
    this.setState({mobileOpen: !this.state.mobileOpen});
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Hidden smUp>
          <HeaderMobile className={classes.appBar} handleDrawerToggle={this.handleDrawerToggle} userData={userData}
                        stocksData={stocksData}/>
          <NavBarMobile className={classes.drawer} handleDrawerToggle={this.handleDrawerToggle}
                        mobileOpen={this.state.mobileOpen}/>
        </Hidden>
        <Hidden xsDown>
          <Header className={classes.appBar} handleDrawerToggle={this.handleDrawerToggle} userData={userData}
                  stocksData={stocksData}/>
          <NavBar className={classes.drawer} handleDrawerToggle={this.handleDrawerToggle}
                  mobileOpen={this.state.mobileOpen}/>
        </Hidden>
        <main className={classes.content}>
          <Toolbar/>
          {this.props.page}
        </main>
      </div>
    )
  }
}

export default withStyles(useStyles, {withTheme: true})(PageContainer);