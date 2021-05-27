import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    relatedNews: {
      textColor: theme.palette.text.primary,
      opacity: "0.7",
    },
    card: theme.card,
  })
);

const RelatedNews = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.card}>
      <Grid container direction="column" alignItems="flex-start" justify="center" className={classes.relatedNews}>
        <Grid item>
          <Typography variant="subtitle2">{props.news.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{props.news.content}</Typography>
        </Grid>
        <Grid item>
          <Typography>Full content at link</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const SingleNews = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item container direction="row" justify="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h4">{props.news.title}</Typography>
          <Typography variant="body1">By {props.news.provider} • {props.news.published_at}</Typography>
        </Grid>
        <Grid item>
          <TickerChip/>
        </Grid>
      </Grid>
      <Grid item>
        <Paper elevation={1} className={classes.card}>
          <Typography variant="body1">
            {props.news.content}
          </Typography>
        </Paper>
      </Grid>
      <Grid item style={{flex: 1}}/> {/*TODO: Make this work (need to set parent height)*/}
      <Grid item>
        <Typography variant="h6">Related News</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
          <Grid item sm={12} md={4}>
            <RelatedNews/>
          </Grid>
          <Grid item sm={12} md={4}>
            <RelatedNews/>
          </Grid>
          <Grid item sm={12} md={4}>
            <RelatedNews/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleNews;
