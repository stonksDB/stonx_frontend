import { Box, Grid, Typography } from "@material-ui/core";
import MarketChart from "./MarketChart";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    greenStyle: {
      color: "#03af03",
    },
    redStyle: {
      color: "#bf0101",
    }
  })
);

const StockPreview = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item xs={5} container direction="column" alignItems="flex-end" justify="center">
        <Grid item>
          <Typography variant="button">{props.stockData.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={props.stockData.value < 0 ? classes.redStyle : classes.greenStyle}>{props.stockData.percent}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={props.stockData.value < 0 ? classes.redStyle : classes.greenStyle}>
            {props.stockData.value}
            {props.stockData.value < 0 ? " ▼" : " ▲"}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={7}>
        <Box display={{ xs: 'none', md: 'block' }}>
          <MarketChart usePointsOf={props.stockData.usePointsOf} height="11vh" enablePoints={false} enableGridY={false} enableLegend={false} enableAxisX={false} enableAxisY={false} enableArea/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StockPreview;
