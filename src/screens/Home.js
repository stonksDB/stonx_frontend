import React, { useContext, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MarketChart from "../components/MarketChart";
import NewsList from "../components/NewsList";
import { UserStateContext } from "../context/UserStateContext";
import { getHistory, getMostPerforming, getLikedTickers } from "../api/API";
import LockIcon from "@material-ui/icons/Lock";
import { getRoute, PAGES } from "../routes";
import Indexes from "../components/Indexes";
import { mapHistory } from "../utils/TickerUtils";

// const stockData1 = {
//   name: "Dow Jones",
//   percent: "-0.82%",
//   value: "-2.68",
//   usePointsOf: "first",
// };

// const stockData2 = {
//   name: "NASDAQ",
//   percent: "0.35%",
//   value: "1.10",
//   usePointsOf: "second",
// };

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    portfolioIcon: {
      color: theme.palette.text.secondary,
      fontSize: 80,
    },
    link: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "underline",
    },
    card: theme.card,
  })
);

const Home = (props) => {
  const classes = useStyles();
  const [mostPerformingData, setMostPerformingData] = useState([]);
  // const [indexesData, setIndexesData] = useState([]);
  const [likedTickersData, setLikedTickersData] = useState([]);
  // const [indexesNum, setIndexesNum] = useState(0);
  // const [indexesReady, setIndexesReady] = useState(false);

  const { isLoggedIn } = useContext(UserStateContext);

  useEffect(() => {
    // Retrieve data for Indexes Charts:
    // getIndexes()
    //   .then((indexes) => {
    //     setIndexesNum(indexes.length);
    //     setIndexesData(indexes);
    //     console.log(indexes);
    //   })
    //   .then(() => setIndexesReady(true));

    // Retrieve data for Most Performing chart:
    getMostPerforming().then((tickers) => {
      tickers.forEach((ticker) => {
        getHistory(ticker.ticker, "1d").then((history) => {
          setMostPerformingData((mostPerformingData) => [
            ...mostPerformingData,
            { points: mapHistory(history), ...ticker },
          ]);
        });
      });
    });

    // Retrieve data for Saved Stocks if user is logged in:
    isLoggedIn() &&
      getLikedTickers().then((tickers) => {
        tickers.forEach((ticker) => {
          getHistory(ticker.ticker, "1d").then((history) => {
            setLikedTickersData((likedTickersData) => [
              ...likedTickersData,
              { points: mapHistory(history), ...ticker },
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
                <Indexes />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <MarketChart
                  title="Most Performing"
                  height="38vh"
                  enablePoints={false}
                  chartData={mostPerformingData}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                {!isLoggedIn() ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <LockIcon className={classes.portfolioIcon} />
                    <Typography className={classes.portfolioText}>
                      <RouterLink
                        to={getRoute(PAGES.LOGIN).path}
                        className={classes.link}
                      >
                        Login
                      </RouterLink>{" "}
                      or{" "}
                      <RouterLink
                        to={getRoute(PAGES.REGISTRATION).path}
                        className={classes.link}
                      >
                        register
                      </RouterLink>{" "}
                      to benefit of full functionalities!
                    </Typography>
                  </Box>
                ) : (
                  <MarketChart
                    title="My Stocks"
                    height="30vh"
                    chartData={mostPerformingData}
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
