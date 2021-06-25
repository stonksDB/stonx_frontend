import { Box, Grid, Typography } from "@material-ui/core";
import MarketChart from "./MarketChart";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

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

const IndexContainer = (props) => {
  const classes = useStyles();

  console.log(props.indexData);
  console.log("OOF");

  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item lg={5} xs>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="button">{props.indexData.name}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              className={
                props.indexData.value < 0
                  ? classes.redStyle
                  : classes.greenStyle
              }
            >
              {props.indexData.percent}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              className={
                props.indexData.value < 0
                  ? classes.redStyle
                  : classes.greenStyle
              }
            >
              {props.indexData.value}
              {props.indexData.value < 0 ? " ▼" : " ▲"}
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
            chartData={props.indexData.chartData}
            enableArea
            indexChart
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default IndexContainer;
