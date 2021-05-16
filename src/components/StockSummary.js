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
              Industry
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.industry}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Market Cap
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.marketCap}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Net Debt & Pref
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.netDebtPref}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Entprs. Value
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.entValue}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Beta
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.beta}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.label}>
              Borrow Cost
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.data}>
              {stockSummary.borrowCost}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StockSummary;
