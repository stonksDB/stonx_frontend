import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useState } from "react";
import TickerChip from "./TickerChip";

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
  const [likedStock, likeStock] = useState(true);
  const ticker = props.ticker;
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

      {ticker.percentage > 0 ? (
        <>
          <Typography variant={"h6"} className={classes.positive}>
            ▲ {Math.abs(ticker.percentage)}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant={"h6"} className={classes.negative}>
            ▼ {Math.abs(ticker.percentage)}
          </Typography>
        </>
      )}
      <IconButton
        aria-label="delete"
        color="primary"
        style={{ float: "right" }}
        onClick={() => likeStock(!likedStock)}
      >
        {likedStock ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Box>
  );
};

export default FollowedTicker;
