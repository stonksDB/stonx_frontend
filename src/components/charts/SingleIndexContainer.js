import { Box, Grid, Typography } from "@material-ui/core";
import MarketChart from "./MarketChart";
import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getIndexPrice } from "../../api/API";
import withLoading from "../../api/withLoading";

const useStyles = makeStyles((theme) =>
  createStyles({
    greenStyle: {
      color: theme.palette.success.main,
    },
    redStyle: {
      color: theme.palette.error.main,
    },
  })
);

const SingleIndexContainer = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    isLoading: true,
    lastData: null,
    chartData: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, lastData: null, chartData: null});

      getIndexPrice(props.index.ticker)
        .then((lastData) => {
          isActive && setState({ isLoading: false, lastData: lastData, chartData: [props.index]});
      });

    return () => {
      isActive = false;
    };
  }, [props.index, setState]);

  const InnerComponent = withLoading((props) => {
    const roundedRatio = props.lastData.ratio.toFixed(2);
    const roundedPrice = props.lastData.regular_market_price.toFixed(0);

    return (
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item lg={5} xs>
          <Grid container direction="column" alignItems="center" justify="center">
            <Grid item style={{ textAlign: "center" }}>
              <Typography variant="button">{props.chartData[0].ticker}</Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className={
                  props.lastData.ratio < 0
                    ? classes.redStyle
                    : classes.greenStyle
                }
              >
                {roundedRatio}%
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                className={
                  props.lastData.ratio < 0
                    ? classes.redStyle
                    : classes.greenStyle
                }
              >
                {roundedPrice}
                {props.lastData.ratio < 0 ? " ▼" : " ▲"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7}>
          <Box display={{ xs: "none", lg: "block" }}>
            <MarketChart
              height="11vh"
              enablePoints={false}
              enableGridY={false}
              enableLegend={false}
              enableAxisX={false}
              enableAxisY={false}
              points={props.chartData}
              enableArea
              indexChart
            />
          </Box>
        </Grid>
      </Grid>
    )});

  return <InnerComponent isLoading={state.isLoading} chartData={state.chartData} lastData={state.lastData} />;
};

export default SingleIndexContainer;
