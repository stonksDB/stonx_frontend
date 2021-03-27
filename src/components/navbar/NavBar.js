import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import routes from "../../routes";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import logo_webp from "../../assets/logo_header/logo_header.webp";

function NavbarList(props) {
  const location = useLocation();
  const navbarRoutes = routes()
    .filter(({ name }) => ["Home", "My Stocks", "News"].includes(name))
    .reverse();

  return (
    <List className={props.className}>
      {navbarRoutes.map(({ name, icon, path }) => (
        <ListItem button key={name} component={Link} to={path}>
          <ListItemIcon children={icon} />
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}

export default function NavBar(props) {
  const drawer = <NavbarList className={props.className} />;

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
}
