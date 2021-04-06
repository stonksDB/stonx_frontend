import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import logo_webp from "../../assets/logo_header/logo_header.webp";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Info } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    active: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
  })
);

const NavbarList = (props) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <List className={props.className}>
      {props.availableRoutes.map(({ name, icon, path }) => (
        <ListItem button key={name} component={Link} to={path}>
          <ListItemIcon
            children={icon}
            className={
              location.pathname === path ? classes.active : classes.inactive
            }
          />
          <ListItemText
            primary={
              <Typography
                className={
                  location.pathname === path ? classes.active : classes.inactive
                }
              >
                {name}
              </Typography>
            }
          />
        </ListItem>
      ))}
      <ListItem button key="/about" component={Link} to="/about">
        <ListItemIcon children={<Info />} className={classes.inactive} />
        <ListItemText
          primary={<Typography className={classes.inactive}>About</Typography>}
        />
      </ListItem>
    </List>
  );
};
export { NavbarList };

const NavBar = (props) => {
  const drawer = <NavbarList className={props.className} {...props} />;

  return (
    <>
      <Drawer
        className={props.className}
        variant="permanent"
        open
        classes={{ paper: props.paper }}
        PaperProps={{ style: { background: "transparent", borderRight: "0" } }}
      >
        <Toolbar>
          <img src={logo_webp} alt="logo" style={{ width: "100%" }} />
        </Toolbar>
        {drawer}
      </Drawer>
    </>
  );
};
export default NavBar;
