import { Box, Chip, Typography, useTheme } from "@material-ui/core";
import React from "react";

const TickerChip = (props) => {
  const theme = useTheme();
  const chipFontSize = (props.big) ? 17 : 13;
  const fullNameVariant = (props.big) ? "h4" : "body1";
  const color = (props.disabled) ? "default" : "primary";
  const chipRightMargin = (props.showFullName) ? theme.spacing(2) : 0;

  return (
    <Box display="flex" flexDirection="row">
      <Chip
        size={props.big ? "medium" : "small"}
        color={color}
        label={props.ticker.ticker}
        style={{fontSize: chipFontSize, marginRight: chipRightMargin}}
      />
      { props.showFullName && <Typography variant={fullNameVariant}>
        {props.big ? props.ticker.name : props.ticker.name.substring(0,9)}  {/*TODO: Fix alignment*/}
      </Typography> }
    </Box>
  );
};

TickerChip.defaultProps = {
  showFullName: false,
  big: false,
  disabled: false,
  ticker: {   //TODO: Remove this when we'll have real data
    name: "Tesla Inc.",
    ticker: "TSLA",
  },
};

export default TickerChip;
