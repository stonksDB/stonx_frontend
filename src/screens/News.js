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

const News = (props) => {
  const classes = useStyles();

    return (
      <>
        <Typography variant={"h4"} className={classes.pageTitle}>
          News
        </Typography>
      </>
    );
  }


export default News;
