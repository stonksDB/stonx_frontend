import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {
  Grid, Button, Box, useTheme,
} from "@material-ui/core";
import UserAvatar from "../user/UserAvatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { getRoute, PAGES } from "../../routes";
import TextAutocomplete from "../TextAutocomplete";
import UserMenu from "../user/UserMenu";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
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
    <section>
      <ButtonBase
        style={{width: "100%"}}
        onClick={handleMenuClick}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Grid item lg={2} xs={3}>
            <UserAvatar userData={props.userData} />
          </Grid>
          <Grid item lg={8} xs={7}>
              <Typography align="left" variant="h6" color="textPrimary">
                {fullName}
              </Typography>
            <Box display={{ xs: 'none', lg: 'block'}}>
              <Typography
                align="left"
                variant="body2"
                color="textPrimary"
              >{`Watching ${props.stocksData.length} stocks`}</Typography>
            </Box>
          </Grid>
          <Grid item style={{flexGrow: 1, padding: 0}} lg xs={false}>
          </Grid>
          <Grid item lg={1} xs={1}>
            <KeyboardArrowDownIcon color="action" />
          </Grid>
        </Grid>
      </ButtonBase>
      <UserMenu id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </section>
  );
};

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar elevation={0} className={props.className} style={{backgroundColor: theme.palette.background.default}}>
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
                      component={RouterLink}
                      to={getRoute(PAGES.LOGIN).path}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item md={4}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      component={RouterLink}
                      to={getRoute(PAGES.REGISTRATION).path}
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
