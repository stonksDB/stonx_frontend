import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import UserAvatar from "../user/UserAvatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { getRoute, PAGES } from "../../routes";
import TextAutocomplete from "../TextAutocomplete";
import UserMenu from "../user/UserMenu";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: theme.input,
    button: { ...theme.button, marginLeft: 5, },
  })
);

const SearchField = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
    >
      <TextAutocomplete />
    </Grid>
  );
};

const UserBanner = (props) => {
  const fullName = `${props.userData.firstName} ${props.userData.lastName}`;

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
    <section style={{width: "100%"}}>
      <ButtonBase
        style={{ width: "100%" }}
        onClick={handleMenuClick}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          style={{ paddingLeft: 5 }}
        >
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <UserAvatar userData={props.userData} />
              </Grid>
              <Grid item>
                <Typography align="left" variant={"h6"}>
                  {fullName}
                </Typography>
                <Typography
                  align="left"
                  variant={"body2"}
                >{`Watching ${props.stocksData.length} stocks`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
      </ButtonBase>
      <UserMenu id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </section>
  );
};

const Header = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar color="transparent" elevation={0} className={props.className}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={9}>
            <SearchField {...props} />
          </Grid>
          {props.renderHeader===true && (
            <Grid item xs={3}>
              {props.userData !== undefined && props.isLoggedIn ? (
                <UserBanner {...props} />
              ) : (
                <Grid container spacing={2}>
                  <Grid item md={8}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => history.push(getRoute(PAGES.LOGIN).path)}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item md={4}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={() => history.push(getRoute(PAGES.REGISTRATION).path)}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
