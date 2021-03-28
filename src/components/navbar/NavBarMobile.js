import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import { NavbarList } from "./NavBar";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      ...theme.button,
      marginBottom: 10,
      padding: 4,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      marginBottom: 10,
      width: "100%",
      paddingRight: 10,
      paddingLeft: 10,
    },
  })
);

const NavBarMobile = (props) => {
  const drawer = <NavbarList className={props.className} {...props} />;
  const { window } = props;
  const container =
    props.window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  const classes = useStyles();

  const history = useHistory();

  const goLogin = () => {
    let path = "/login";
    history.push(path);
  };

  const goRegister = () => {
    let path = "/register";
    history.push(path);
  };

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {drawer}
      {!props.isLoggedIn && (
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={goLogin}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button
            className={classes.button}
            onClick={goRegister}
            variant="outlined"
            color="primary"
          >
            Register
          </Button>
        </div>
      )}
    </Drawer>
  );
};

export default NavBarMobile;
