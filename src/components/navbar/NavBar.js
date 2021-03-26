import {List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@material-ui/core";
import routes from "../../routes";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import React from "react";

function NavbarList(props) {
  const navbarRoutes = routes().filter(({name}) => (["Home", "My Stocks", "News"].includes(name))).reverse();

  return (
    <List className={props.className}>
      {navbarRoutes.map(({name, icon, path}) => (
        <ListItem button key={name} component={Link} to={path}>
          <ListItemIcon children={icon}/>
          <ListItemText primary={name}/>
        </ListItem>
      ))}
    </List>
  );
}

export default function NavBar(props) {
  const drawer = <NavbarList className={props.className}/>

  return (
    <Drawer
      className={props.className}
      variant="permanent"
      open
      classes={{paper: props.className}}
      PaperProps={{style: {background: "transparent", borderRight: "0"}}}
    >
      <Toolbar/>
      {drawer}
    </Drawer>
  );
}