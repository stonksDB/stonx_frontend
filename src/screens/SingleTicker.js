import React, { useContext, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import MarketChart from "../components/MarketChart";
import StockSummary from "../components/StockSummary";
import TickerChip from "../components/TickerChip";
import NewsList from "../components/NewsList";
import { getCompanyInfo, getHistory } from "../api/API";
import { useParams } from "react-router-dom";
import withLoading from "../api/withLoading";
import TickerHeart from "../components/TickerHeart";
import { UserStateContext } from "../context/UserStateContext";
import { mapHistory } from "../utils/TickerUtils";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {},
    card: theme.card,
    paddedCard: {
      ...theme.card,
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    positive: {
      color: theme.palette.success.main,
      display: "inline-flex",
      fontWeight: "normal",
    },
    negative: {
      color: theme.palette.error.main,
      display: "inline-block",
      fontWeight: "normal",
    },
  })
);

const SingleTicker = (props) => {
  const mockTicker = {
    ticker: "TSLA",
    name: "Tesla, Inc.",
    currentCost: 629.7,
    percentage: 0.75, // TODO: check if this is absolute value or if it is positive/negative
    variation: +25.7,
    market: {
      name: "NASDAQ",
      lastUpdate: "gg/mm/yyyy",
    },
    summary: {
      sector: "Consumer Cyclicals",
      industry: "Electric (Alternative) Vehicles",
      marketCap: "$606.89B",
      netDebtPref: "$6.27B",
      entValue: "$600.62B",
      beta: "1.99x",
      borrowCost: "0.25%",
    },
  };

  const classes = useStyles();
  const { id } = useParams();
  const { isLoggedIn } = useContext(UserStateContext);

  const [state, setState] = useState({
    loading: true,
    ticker: {},
    history: [],
  });

  useEffect(() => {
    let isActive = true;
    let historyPrev = [];
    getCompanyInfo(id)
      .then(
        getHistory(id, "1d").then((h) => {
          historyPrev = h;
        })
      )
      .then(
        (res) =>
          isActive &&
          setState({
            ...state,

            loading: false,
            ticker: { points: mapHistory(historyPrev), ...res },
          })
      );
      // TODO: implement market last update and current cost with api stocks/price/:ticker
    return () => {
      isActive = false;
    };
  }, [setState, id]);
  console.log(state.ticker);

  const InnerComponent = withLoading((props) => {
    return (
      <>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" style={{ paddingBottom: 25 }}>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <TickerChip ticker={props.ticker} big showFullName />
                  {isLoggedIn() && <TickerHeart ticker={props.ticker} />}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h4"} style={{ display: "inline-block" }}>
                  {mockTicker.currentCost}
                </Typography>
                <Typography
                  variant={"h6"}
                  style={{ display: "inline-block", paddingRight: 20 }}
                >
                  &nbsp;USD
                </Typography>

                {mockTicker.variation > 0 ? (
                  <>
                    <Typography variant={"h6"} className={classes.positive}>
                      ▲{Math.abs(mockTicker.variation)} ({mockTicker.percentage}
                      %)
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant={"h6"} className={classes.negative}>
                      ▼{Math.abs(mockTicker.variation)} ({mockTicker.percentage}
                      %)
                    </Typography>
                  </>
                )}

                <Typography variant={"body2"} style={{ display: "block" }}>
                  {mockTicker.market.name}, {mockTicker.market.lastUpdate}
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={1} className={classes.card}>
                  {
                    <MarketChart
                      height="40vh"
                      points="first"
                      enableGridX
                      enableGridY
                      enableLegend={false}
                      tickerChart
                      ticker={state.ticker}
                      chartData={[state.ticker]}
                    />
                  }
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={1} className={classes.paddedCard}>
                  <StockSummary data={mockTicker.summary} />
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
  });

  return <InnerComponent isLoading={state.loading} ticker={state.ticker} />;
};

export default SingleTicker;
