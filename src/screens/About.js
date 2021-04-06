import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
  })
);

const About = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant={"h4"} className={classes.pageTitle}>
        About StonX
      </Typography>
    </>
  );
};

export default About;
