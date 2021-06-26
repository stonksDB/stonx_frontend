import React, { useContext, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import MarketChart from "../components/MarketChart";
import StockSummary from "../components/StockSummary";
import TickerChip from "../components/TickerChip";
import NewsList from "../components/NewsList";
import { getCompanyInfo, getHistory, getTickerPrice } from "../api/API";
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
    let history = [];
    let currentPrice = {};
    getCompanyInfo(id)
      .then(
        getHistory(id, "1d").then((h) => {
          history = h;
        })
      )
      .then(
        getTickerPrice(id).then((p) => {
          currentPrice = p;
        })
      )
      .then(
        (companyInfo) =>
          isActive &&
          setState({
            ...state,
            loading: false,
            ticker: {
              points: mapHistory(history),
              currentPrice: {
                price: currentPrice.regular_market_price,
                updated: new Date(currentPrice.price_last_update),
                ratio: currentPrice.ratio,
              },
              ...companyInfo,
            },
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
                  {state.ticker.currentPrice.price}
                </Typography>
                <Typography
                  variant={"h6"}
                  style={{ display: "inline-block", paddingRight: 20 }}
                >
                  &nbsp;USD
                </Typography>

                {state.ticker.currentPrice.ratio > 0 ? (
                  <>
                    <Typography variant={"h6"} className={classes.positive}>
                      ▲{Math.abs(state.ticker.currentPrice.ratio)} ({mockTicker.percentage}
                      %)
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant={"h6"} className={classes.negative}>
                      ▼{Math.abs(state.ticker.currentPrice.ratio)} ({mockTicker.percentage}
                      %)
                    </Typography>
                  </>
                )}

                <Typography variant={"body2"} style={{ display: "block" }}>
                  {mockTicker.market.name}, {state.ticker.currentPrice.updated.toString()}
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
