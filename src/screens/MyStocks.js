import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import NewsList from "../components/NewsList";
import FollowedTicker from "../components/FollowedTicker";
import LikedStocksList from "../components/LikedStocksList";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
  })
);

const MyStocks = (props) => {
  const classes = useStyles();



  return (
    <>
      <Typography variant={"h4"} className={classes.pageTitle}>
        My Area
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={9}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                <LikedStocksList />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                Here goes the stocks' carousel
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.card}>
                Here go the user's details
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.card}>
                "Portoflio Coming soon"
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={0} className={classes.card}>
            <NewsList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MyStocks;
