import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import UserAvatar from "../user/UserAvatar";
import ImageWithFallback from "../../utils/ImageWithFallback";
import UserMenu from "../user/UserMenu";
import TextAutocomplete from "../TextAutocomplete";

const SearchField = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems={"center"}
      style={{ background: "white", borderRadius: "20px"}}
    >
      <Grid item>
        <ImageWithFallback src="assets/logo/logo" alt="logo" width="40" />
      </Grid>
      <Grid item xs style={{padding: "4px"}}>
        <TextAutocomplete />
      </Grid>
      <Grid item>
        <IconButton
          style={{ padding: 2 }}
          onClick={handleMenuClick}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        >
          <UserAvatar userData={props.userData} />
        </IconButton>
        <UserMenu id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
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
