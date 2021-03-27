import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: theme.card,
  })
);

const MarketChart = (props) => {
  const classes = useStyles();
  return <div className="App">This is a market chart</div>;
};

export default MarketChart;
