import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  pageTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  card: {
    height: "100%",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "15px",
  },
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
                <div className={classes.card}>
                  Here go the small market charts
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.card}>Here goes the xxl chart</div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.card}>
                  Here goes a small sector chart
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.card}>Here goes yet one more chart</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.card}>News for everyone</div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Home);
