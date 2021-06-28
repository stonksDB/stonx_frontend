import React, { useContext, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import MarketChart from "../components/charts/MarketChart";
import StockSummary from "../components/charts/StockSummary";
import TickerChip from "../components/stocks/TickerChip";
import NewsList from "../components/NewsList";
import { getCompanyInfo, getHistory, getTickerPrice } from "../api/API";
import { useParams } from "react-router-dom";
import withLoading from "../api/withLoading";
import TickerHeart from "../components/stocks/TickerHeart";
import { UserStateContext } from "../context/UserStateContext";
import dayjs from "dayjs";

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
  const classes = useStyles();
  const { id } = useParams();
  const { isLoggedIn } = useContext(UserStateContext);

  const [state, setState] = useState({
    isLoading: true,
    ticker: null,
    history: [],
    currentPrice: null,
  });

  useEffect(() => {
    let isActive = true;

    async function getData() {
      const chartData = await getHistory(id, "true");
      const companyData = await getCompanyInfo(id);
      const price = await getTickerPrice(id);

      return [companyData, chartData, price];
    }

    getData().then((data) => {
      const chartData = { ticker: data[0], points: data[1] };
      isActive &&
        setState({
          isLoading: false,
          ticker: data[0],
          history: [chartData],
          currentPrice: data[2],
        });
      return () => {
        isActive = false;
      };
    });
  }, [id]);

  const InnerComponent = withLoading((props) => {
    const roundedRatio = Math.abs(props.currentPrice.ratio).toFixed(2);
    const roundedPrice = props.currentPrice.regular_market_price.toFixed(2);

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
                  {roundedPrice}
                </Typography>
                <Typography
                  variant={"h6"}
                  style={{ display: "inline-block", paddingRight: 20 }}
                >

                </Typography>

                {roundedRatio > 0 ? (
                  <>
                    <Typography variant={"h6"} className={classes.positive}>
                      ▲ {roundedRatio}%
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant={"h6"} className={classes.negative}>
                      ▼ {roundedRatio}%
                    </Typography>
                  </>
                )}

                <Typography variant={"body2"} style={{ display: "block" }}>
                  {props.chartData[0].ticker.currency}{", "} updated{" "}
                  {dayjs(props.currentPrice.price_last_update).format(
                    "MMMM DD YYYY HH:MM"
                  )}
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={1} className={classes.card}>
                  {
                    <MarketChart
                      height="40vh"
                      enableGridY
                      enableLegend={false}
                      tickerChart
                      points={props.chartData}
                    />
                  }
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={1} className={classes.paddedCard}>
                  <StockSummary data={state.ticker} />
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

  return (
    <InnerComponent
      isLoading={state.isLoading}
      ticker={state.ticker}
      currentPrice={state.currentPrice}
      chartData={state.history}
    />
  );
};

export default SingleTicker;
