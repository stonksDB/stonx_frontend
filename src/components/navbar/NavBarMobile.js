import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { Info } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    stickToBottom: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      zIndex: 4000,
    },
  })
);

const NavBarMobile = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <BottomNavigation
      className={classes.stickToBottom}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {props.availableRoutes.map(({ name, icon, path }) => (
        <BottomNavigationAction
          label={name}
          icon={icon}
          value={path}
          component={Link}
          to={path}
        />
      ))}
      <BottomNavigationAction
        label="About"
        icon={<Info />}
        value="/about"
        component={Link}
        to="/about"
      />
    </BottomNavigation>
  );
};

export default NavBarMobile;
