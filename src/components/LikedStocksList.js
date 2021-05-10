import React from "react";
import FollowedTicker from "../components/FollowedTicker";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const LikedStocksList = (props) => {
  const ticker = {
    name: "Tesla Inc.",
    short: "TSLA.MI",
    percentage: -12.2,
    id: 1,
  };

  var ticks = [];

  for (let i = 0; i < 10; i++) {
    ticks.push(ticker);
  }

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      direction="row"
    >
      {ticks.map((t) => (
        <Grid item sm={12} md={6} lg={4}>
          <FollowedTicker ticker={t} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LikedStocksList;
