import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";


const useStyles = (theme) => ({
  pageTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  card: theme.card,
});

class MyStocks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant={"h4"} className={classes.pageTitle}>
          My Area
        </Typography>

        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.card}>
                  Here go the followed tickers
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.card}>
                  Here goes the stocks' carousel
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.card}>
                  Here go the user's details
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.card}>
                  "Portoflio Coming soon"
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={0} className={classes.card}>
              Custom news
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MyStocks);
