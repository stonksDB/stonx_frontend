import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MarketChart from "../components/MarketChart";
import NewsList from "../components/NewsList";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
  })
);

const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant={"h4"} className={classes.pageTitle}>
        Home
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={9}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                Here go the small charts
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                <MarketChart
                  title="Most Performing"
                  height="38vh"
                  enableArea
                  enablePoints={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.card}>
                <MarketChart
                  title="Sector"
                  usePointsOf="first"
                  enableLegend={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.card}>
                <MarketChart
                  title="My Stocks"
                  usePointsOf="second"
                  enableLegend={false}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={0} className={classes.card}>
            <NewsList/>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
