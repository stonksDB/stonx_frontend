import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MarketChart from "../components/MarketChart";
import NewsList from "../components/NewsList";
import IndexContainer from "../components/IndexContainer";
import { UserStateContext } from "../context/UserStateContext";
import { getHistory, getMostPerforming } from "../api/API";

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
  const [mostPerformingData, setMostPerformingData] = useState([]);

  const { isLoggedIn } = useContext(UserStateContext);

  const mapHistory = (history) => {
    let mappedHistory = [];
    history.forEach((entry) => {
      mappedHistory.push({
        x: entry.datetime,
        y: entry.Close,
        top: entry.High,
        bottom: entry.Low,
      });
    });
    return mappedHistory;
  };

  useEffect(() => {
    // Retrieve data for Most Performing chart:
    getMostPerforming().then((tickers) => {
      tickers.forEach((obj, index) => {
        getHistory(obj.ticker, "1d").then((history) => {
          setMostPerformingData((mostPerformingData) => [
            ...mostPerformingData,
            { points: mapHistory(history), ...obj },
          ]);
        });
      });
    });
  }, [setMostPerformingData]);

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        Home
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={9}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <Grid
                  container
                  direction="row"
                  spacing={1}
                  justify="space-between"
                >
                  <Grid item xs>
                    <IndexContainer stockData={stockData1} />
                  </Grid>
                  <Grid item xs>
                    <IndexContainer stockData={stockData1} />
                  </Grid>
                  <Grid item xs>
                    <IndexContainer stockData={stockData1} />
                  </Grid>
                  <Grid item xs>
                    <IndexContainer stockData={stockData2} />
                  </Grid>
                  <Grid item xs>
                    <IndexContainer stockData={stockData2} />
                  </Grid>
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
                  chartData={mostPerformingData}
                  mostPerforming
                />
              </Paper>
            </Grid>
            {/* <Grid item xs={6}>
              <Paper elevation={1} className={classes.card}>
                <MarketChart
                  title="Sector"
                  usePointsOf="first"
                  enableLegend={false}
                />
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                {isLoggedIn ? (
                  <Paper />
                ) : (
                  <MarketChart
                    title="My Stocks"
                    height="30vh"
                    enableLegend={false}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={1} className={classes.card}>
            <NewsList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
