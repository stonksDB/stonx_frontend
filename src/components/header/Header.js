import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { Grid, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import UserAvatar from "../UserAvatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ButtonBase from "@material-ui/core/ButtonBase";

const SearchField = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      style={{
        background: "white",
        borderRadius: "15px",
        flex: 1,
      }}
    >
      <Grid item style={{ paddingLeft: 10, paddingTop: 3 }}>
        <Search />
      </Grid>
      <Grid item xs>
        <InputBase
          placeholder="Search..."
          fullWidth={true}
          style={{ padding: 7 }}
        />
      </Grid>
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
  return (
    <AppBar color="transparent" elevation={0} className={props.className}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center" justify="center">
          {props.loginScreen ? (
            <>
              <Grid item xs={9}>
                <SearchField {...props} />
              </Grid>
              <Grid item xs={3}>
                <UserMenu {...props} />
              </Grid>
            </>
          ) : (
            <>
            <Grid item xs={9}>
              <SearchField {...props} />
            </Grid>
          </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
