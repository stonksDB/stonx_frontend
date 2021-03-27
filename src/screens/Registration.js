import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
  })
);

const Registration = (props) => {
  const classes = useStyles();
  return (
    <div className="App">
      <p>This is Registration</p>
    </div>
  );
};

export default Registration;
