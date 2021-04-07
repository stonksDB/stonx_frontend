import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { Grid, IconButton, InputBase } from "@material-ui/core";
import UserAvatar from "../UserAvatar";
import ImageWithFallback from "../../utils/ImageWithFallback";

const SearchField = (props) => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems={"center"}
      style={{ background: "white", borderRadius: "20px" }}
    >
      <Grid item>
        <ImageWithFallback src="assets/logo/logo" alt="logo" width="40" />
      </Grid>
      <Grid item xs>
        <InputBase placeholder="Search..." fullWidth={true} />
      </Grid>
      <Grid item>
        <IconButton style={{ padding: 2 }}>
          <UserAvatar userData={props.userData} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const HeaderMobile = (props) => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      className={props.className}
    >
      <Toolbar>
        <SearchField
          handleDrawerToggle={props.handleDrawerToggle}
          userData={props.userData}
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
