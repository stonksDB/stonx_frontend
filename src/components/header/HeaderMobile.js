import React from "react";
import { Toolbar, AppBar, Grid } from "@material-ui/core";
import ImageWithFallback from "../../utils/ImageWithFallback";
import SearchBar from "../SearchBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getRoute, PAGES } from "../../routes";
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from "../user/UserMenu";

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      background: theme.palette.background.default,
    },
    bar: {
      background: theme.palette.background.paper,
      borderRadius: "20px",
    },
  })
);

const HeaderMobile = (props) => {
  const classes = useStyles();

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
          alignItems="center"
          className={classes.bar}
          >
        <Grid item>
          <RouterLink to={getRoute(PAGES.HOME).path}>
            <ImageWithFallback src="assets/logo/logo" alt="stonx logo" width="40"/>
          </RouterLink>
        </Grid>
        <Grid item xs style={{padding: 4}}>
          <SearchBar />
        </Grid>
          <Grid item>
            <UserMenu reduced/>
          </Grid>
      </Grid>
        
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
