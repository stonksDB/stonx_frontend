import React  from "react";
import {
  AppBar, Grid, Button, useTheme,
  Toolbar,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { getRoute, PAGES } from "../../routes";
import SearchBar from "../SearchBar";
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from "../user/UserMenu";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: { ...theme.button, marginLeft: 5, },
  })
);

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar elevation={0} className={props.className} style={{backgroundColor: theme.palette.background.default}}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={9}>
            <Grid container direction="row" alignItems="center">
              <SearchBar {...props} />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            {props.isLoggedIn() ? (
              <UserMenu {...props}/>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
