import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import routes from "../../routes";
import {Link} from "react-router-dom";
import {useTheme} from "@material-ui/core/styles";
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

export default function NavBarMobile(props) {
  const drawer = <NavbarList className={props.className}/>
  const {window} = props;
  const container = props.window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {drawer}
    </Drawer>
  );
}