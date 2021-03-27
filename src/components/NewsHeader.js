import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: theme.card,
  })
);

const NewsHeader = (props) => {
  const classes = useStyles();
  return <div className="App">News Header</div>;
};

export default NewsHeader;
