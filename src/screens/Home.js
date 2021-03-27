import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  pageTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  card: theme.card,
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant={"h4"} className={classes.pageTitle}>
          Home
        </Typography>

        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.card}>
                  Here go the small market charts
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.card}>Here goes the xxl chart</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.card}>
                  Here goes a small sector chart
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.card}>Here goes yet one more chart</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={0} className={classes.card}>News for everyone</Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Home);
