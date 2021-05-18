import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import UserAvatar from "../user/UserAvatar";
import ImageWithFallback from "../../utils/ImageWithFallback";
import UserMenu from "../user/UserMenu";
import TextAutocomplete from "../TextAutocomplete";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      background: theme.palette.background.default,
    },
    bar: {
      background: "white",
      borderRadius: "20px",
    },
  })
);

const HeaderMobile = (props) => {
  const classes = useStyles();

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
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.header}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          spacing={2}
          alignItems={"center"}
          className={classes.bar}
          >
        <Grid item>
          <ImageWithFallback src="assets/logo/logo" alt="logo" width="40" />
        </Grid>
        <Grid item xs style={{padding: 4}}>
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
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
