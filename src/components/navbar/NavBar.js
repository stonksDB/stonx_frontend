import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ImageWithFallback from "../../utils/ImageWithFallback";
import { getRoute, PAGES } from "../../routes";
import { ThemeVariantContext } from "../../context/ThemeVariantContext";
import { lightTheme } from "../../theme";

const useStyles = makeStyles((theme) =>
  createStyles({
    active: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    inactive: {
    },
  })
);

const NavbarList = (props) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <List className={props.className}>
      {props.availableRoutes.map(({ name, icon, path }) => (
        <ListItem button key={name} component={RouterLink} to={path}>
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
  const {theme} = useContext(ThemeVariantContext);
  const logoPath = (theme===lightTheme) ? "assets/logo_header/light/logo_header" : "assets/logo_header/dark/logo_header";

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
          <RouterLink to={getRoute(PAGES.HOME).path}>
            <ImageWithFallback src={logoPath} alt="stonx logo"/>
          </RouterLink>
        </Toolbar>
        {drawer}
      </Drawer>
    </>
  );
};
export default NavBar;
