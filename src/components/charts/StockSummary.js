import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    data: {
      textAlign: "right",
      fontWeight: "normal",
    },
    label: {
      fontWeight: "normal",
      color: theme.palette.text.secondary,
    },
  })
);

const StockSummary = (props) => {
  const classes = useStyles();

  const stockSummary = props.data;
  console.log(stockSummary);

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Sector
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.sector}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Website
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.website}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Location
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.city} ({stockSummary.state})
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Phone
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.phone}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StockSummary;
