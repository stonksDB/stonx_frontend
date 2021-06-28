import { Box, Chip, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { getRoute, PAGES } from "../../routes";
import { Link as RouterLink } from "react-router-dom";

const TickerChip = (props) => {
  const theme = useTheme();
  const chipFontSize = (props.big) ? 17 : 13;
  const fullNameVariant = (props.big) ? "h4" : "body1";
  const color = (props.disabled) ? "default" : "primary";
  const chipRightMargin = (props.showFullName) ? theme.spacing(2) : 0;

  return (
    <Box display="flex" flexDirection="row">
      <Chip
        component={RouterLink}
        to={`${getRoute(PAGES.SINGLE_TICKER).path.slice(0, -4)}/${props.ticker.ticker}`}
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
};

export default TickerChip;
