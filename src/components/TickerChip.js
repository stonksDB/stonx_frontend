import { Box, Chip, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    chip: {
      marginRight: theme.spacing(2),
      fontWeight: "normal",
    },
  })
);

const TickerChip = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Chip
        size={props.big ? "medium" : "small"}
        color="primary"
        label={props.ticker.short}
        className={classes.chip}
        style={props.big ? {fontSize: 17} : {fontSize: 12}}
      />
      {props.showFullName ? (
        <Typography variant={props.big ? "h4" : "body1"}>{props.ticker.name}</Typography>
        )
        : ("")
      }
    </Box>
  );
};

TickerChip.defaultProps = {
  showFullName: true,
  big: false,
};

export default TickerChip;