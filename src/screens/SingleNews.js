import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";
import withLoading from "../api/withLoading";
import { parseDate } from "../utils/Dates";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink } from "react-router-dom";
import { getSingleNews } from "../api/API";

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
          <Typography variant="subtitle2">{props.news.provider}</Typography>
        </Grid>
        <Grid item>
          <Link
            variant="body1"
            component={RouterLink}
            to={`${getRoute(PAGES.NEWS).path}/${props.news.uuid}`}
            color="textPrimary"
          >
            {props.news.title}
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

const SingleNews = (props) => {
  const classes = useStyles();
  const newsUuid = window.location.href.split("/").pop();

  const [state, setState] = useState({
    loading: true,
    news: {},
  });

  useEffect(() => {
    setState({loading: true});
    getSingleNews(newsUuid)
      .then((res) => setState({loading: false, news: res}));
  }, [newsUuid, setState]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid container direction="column" spacing={3}>
        <Grid item container direction="row" justify="space-between" alignItems="flex-end">
          <Grid item>
            <Typography variant="h4">{props.news.title}</Typography>
            <Typography variant="body1">By {props.news.provider} • {parseDate(props.news.published_at)}</Typography>
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
          <Grid container direction="row" justify="center" alignItems="center" spacing={5} style={{height: "1vh"}}>
            <Grid item sm={12} md={4}>
              <RelatedNews news={props.news}/>
            </Grid>
            <Grid item sm={12} md={4}>
              <RelatedNews news={props.news}/>
            </Grid>
            <Grid item sm={12} md={4}>
              <RelatedNews news={props.news}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <InnerComponent isLoading={state.loading} news={state.news}/>
  );
};

export default SingleNews;
