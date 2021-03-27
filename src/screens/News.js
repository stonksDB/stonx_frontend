import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = (theme) => ({
  pageTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  card: theme.card,
});

class News extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant={"h4"} className={classes.pageTitle}>
          News
        </Typography>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(News);
