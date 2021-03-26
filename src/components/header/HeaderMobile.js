import "../../App.css";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {Grid, IconButton, InputBase,} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import UserAvatar from "../UserAvatar";

export default function HeaderMobile(props) {
  function SearchField(props) {
    return (
      <Grid container direction="row" spacing={2} alignItems={"center"}
            style={{background: "white", borderRadius: "20px"}}>
        <Grid item> <IconButton onClick={props.handleDrawerToggle}><Menu/></IconButton> </Grid>
        <Grid item xs> <InputBase placeholder="Search..." fullWidth={true}/> </Grid>
        <Grid item> <IconButton style={{padding: 2}}> <UserAvatar userData={props.userData}/> </IconButton> </Grid>
      </Grid>
    );
  }

  return (
    <AppBar position="fixed" color="transparent"
            elevation={0} className={props.className}>
      <Toolbar>
        <SearchField handleDrawerToggle={props.handleDrawerToggle} userData={props.userData}/>
      </Toolbar>
    </AppBar>
  );
}
