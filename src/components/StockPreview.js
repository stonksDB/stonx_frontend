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
      <Grid item lg={5} xs>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item style={{textAlign: "center"}}>
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
      </Grid>
      <Grid item lg={7}>
        <Box display={{ xs: 'none', lg: 'block'}}>
          <MarketChart usePointsOf={props.stockData.usePointsOf} height="11vh" enablePoints={false} enableGridY={false} enableLegend={false} enableAxisX={false} enableAxisY={false} enableArea/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StockPreview;
