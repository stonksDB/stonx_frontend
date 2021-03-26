import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {Grid, InputBase,} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import logo_webp from "../../assets/logo_header/logo_header.webp";
import UserAvatar from "../UserAvatar";

export default function Header(props) {
  function SearchField() {
    return (
      <Grid container direction="row" spacing={2} alignItems={"flex-end"}
            style={{background: "white", borderRadius: "15px", flex: 1}}>
        <Grid item> <Search/> </Grid>
        <Grid item xs> <InputBase placeholder="Search..." fullWidth={true}/> </Grid>
      </Grid>
    );
  }

  function UserMenu() {
    const fullName = `${props.userData.firstName} ${props.userData.lastName}`;

    return (
      <Grid container direction="row" spacing={2} justify={"flex-end"}>
        <Grid item>
          <UserAvatar userData={props.userData}/>
        </Grid>
        <Grid item direction="column">
          <Typography variant={"h6"}>{fullName}</Typography>
          <Typography variant={"body2"}>{`Watching ${props.stocksData.length} stocks`}</Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <AppBar position="fixed" color="transparent"
            elevation={0} className={props.className}>
      <Toolbar>
        <Grid item xs={3} justify={"center"}>
          <img src={logo_webp} alt="logo" style={{maxWidth: "40%"}}/>
        </Grid>
        <Grid item xs={8}>
          <SearchField/>
        </Grid>
        <Grid item xs={3}>
          <UserMenu/>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
