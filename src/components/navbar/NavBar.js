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
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Info } from "@material-ui/icons";
import ImageWithFallback from "../../utils/ImageWithFallback";

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
          <ImageWithFallback src="assets/logo_header/logo_header" alt="logo" />
        </Toolbar>
        {drawer}
      </Drawer>
    </>
  );
};
export default NavBar;
