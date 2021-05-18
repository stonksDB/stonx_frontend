import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MarketChart from "../components/MarketChart";
import NewsList from "../components/NewsList";
import StockPreview from "../components/StockPreview";

const stockData1 = {
  name: "Dow Jones",
  percent: "-0.82%",
  value: "-2.68",
  usePointsOf: "first",
};
const stockData2 = {
  name: "NASDAQ",
  percent: "0.35%",
  value: "1.10",
  usePointsOf: "second",
};

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
              <Paper elevation={1} className={classes.card}>
                <Grid container direction="row" spacing={1} justify="space-between">
                  <Grid item xs><StockPreview stockData={stockData1}/></Grid>
                  <Grid item xs><StockPreview stockData={stockData1}/></Grid>
                  <Grid item xs><StockPreview stockData={stockData1}/></Grid>
                  <Grid item xs><StockPreview stockData={stockData2}/></Grid>
                  <Grid item xs><StockPreview stockData={stockData2}/></Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <MarketChart
                  title="Most Performing"
                  height="38vh"
                  enableArea
                  enablePoints={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={1} className={classes.card}>
                <MarketChart
                  title="Sector"
                  usePointsOf="first"
                  enableLegend={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={1} className={classes.card}>
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
          <Paper elevation={1} className={classes.card}>
            <NewsList/>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
