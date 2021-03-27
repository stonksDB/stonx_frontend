import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
  })
);

const SingleNews = (props) => {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.pageTitle}>
        Single News
      </Typography>
    </div>
  );
};

export default SingleNews;
