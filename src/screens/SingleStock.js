import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MarketChart from "../components/MarketChart";
import StockSummary from "../components/StockSummary";
import TickerChip from "../components/TickerChip";
import NewsList from "../components/NewsList";
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

const SingleStock = (props) => {
  const stock = {
    short: "TSLA.MI",
    name: "Tesla, Inc.",
    currentCost: 629.7,
    percentage: 0.75, // TODO: check if this is absolute value or if it is positive/negative
    variation: +25.7,
    liked: true,
    market: {
      name: "NASDAQ" ,
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
    }
  }

  const [likedStock, likeStock] = useState(stock.liked);
  const classes = useStyles();



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
                <TickerChip ticker={stock} big showFullName/>
                <IconButton
                  aria-label="delete"
                  color="primary"
                  style={{ float: "right" }}
                  onClick={() => likeStock(!likedStock)}
                >
                  {likedStock ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h4"} style={{ display: "inline-block" }}>
                {stock.currentCost}
              </Typography>
              <Typography
                variant={"h6"}
                style={{ display: "inline-block", paddingRight: 20 }}
              >
                &nbsp;USD
              </Typography>

              {stock.variation > 0 ? (
                <>
                  <Typography variant={"h6"} className={classes.positive}>
                    ▲{Math.abs(stock.variation)} ({stock.percentage}%)
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant={"h6"} className={classes.negative}>
                    ▼{Math.abs(stock.variation)} ({stock.percentage}%)
                  </Typography>
                </>
              )}

              <Typography variant={"body2"} style={{ display: "block" }}>
                {stock.market.name}, {stock.market.lastUpdate}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <MarketChart
                  height="40vh"
                  points="first"
                  enableGridX
                  enableGridY
                  enableLegend={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.paddedCard}>
                <StockSummary data={stock.summary} />
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

export default SingleStock;
