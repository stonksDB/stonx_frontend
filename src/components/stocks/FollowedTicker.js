import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import TickerChip from "./TickerChip";
import TickerHeart from "./TickerHeart";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {},
    card: theme.card,
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
    outerContainer: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
  })
);

const FollowedTicker = (props) => {
  const ticker = props.ticker;
  const percentage = 12.2;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      className={classes.outerContainer}
    >
      <TickerChip ticker={ticker} showFullName/>

      {percentage > 0 ? (
        <>
          <Typography variant={"h6"} className={classes.positive}>
            ▲ {Math.abs(percentage)}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant={"h6"} className={classes.negative}>
            ▼ {Math.abs(percentage)}
          </Typography>
        </>
      )}
      <TickerHeart ticker={props.ticker}/>
    </Box>
  );
};

export default FollowedTicker;
