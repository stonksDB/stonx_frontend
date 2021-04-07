import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import UserAvatar from "../UserAvatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: theme.input,
    button: { ...theme.button, marginLeft: 5, },
  })
);

const SearchField = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      // style={{
      //   background: "white",
      //   borderRadius: "15px",
      //   flex: 1,
      // }}
    >
      {/* <Grid item style={{ paddingLeft: 10, paddingTop: 3 }}>
        <Search />
      </Grid>
      <Grid item xs>
        <InputBase
          placeholder="Search..."
          fullWidth={true}
          style={{ padding: 7 }}
        />
      </Grid> */}
      <TextField
        label="Search..."
        variant="outlined"
        className={classes.input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

const UserMenu = (props) => {
  const fullName = `${props.userData.firstName} ${props.userData.lastName}`;

  return (
    <ButtonBase style={{ width: "100%" }}>
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
            <Grid item direction="column">
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
  );
};

const Header = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const goLogin = () => {
    let path = "/login";
    history.push(path);
  };
  const goRegister = () => {
    let path = "/registration";
    history.push(path);
  };
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
                <UserMenu {...props} />
              ) : (
                <Grid container spacing={2}>
                  <Grid item md={8}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={goLogin}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item md={4}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={goRegister}
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
