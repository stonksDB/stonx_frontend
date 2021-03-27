import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import { NavbarList } from "./NavBar";


const NavBarMobile = (props) => {
  const drawer = <NavbarList className={props.className} />;
  const { window } = props;
  const container =
    props.window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();

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
    </Drawer>
  );
};

export default NavBarMobile;
