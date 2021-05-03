import React from "react";
import FollowedTicker from "../components/FollowedTicker";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const LikedStocksList = (props) => {
  const ticker = {
    name: "Tesla Inc.",
    short: "TSLA.MI",
    percentage: +12.2,
    id: 1,
  };

  var ticks = [];

  for (let i = 0; i < 10; i++) {
    ticks.push(ticker);
  }

  return (
    <Grid container spacing={0} direction="row">
      {ticks.map((t) => (
        <Grid item xs={4} style={{ paddingLeft: 40, paddingRight: 40 }}>
          <FollowedTicker ticker={t} />
        </Grid>
      ))}
      {/*TODO: find way to align grid with only vertical spacing: spacing is a shitty strategy */}
    </Grid>
  );
};

export default LikedStocksList;
