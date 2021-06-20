import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";
import withLoading from "../api/withLoading";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink, useParams } from "react-router-dom";
import { getSingleNews } from "../api/API";
import dayjs from "dayjs";

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
          <Typography variant="subtitle2">{props.news.provider.displayName}</Typography>
        </Grid>
        <Grid item>
          <Link
            variant="body1"
            component={RouterLink}
            to={`${getRoute(PAGES.NEWS).path}/${props.news.id}`}
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
  const {id} = useParams();

  const [state, setState] = useState({
    loading: true,
    news: {},
  });

  useEffect(() => {
    let isActive = true;
    setState({loading: true});

    getSingleNews(id)
      .then((res) => isActive && setState({loading: false, news: res}));

    return () => {
      isActive = false;
    }
  }, [setState, id]);

  const InnerComponent = withLoading((props) => {
    let news = props.news.data.contents[0].content;
    return (
      <Grid container direction="column" spacing={3}>
        <Grid item container direction="row" justify="space-between" alignItems="flex-end">
          <Grid item>
            <Typography variant="h4" component="h1">{news.title}</Typography>
            <Typography variant="body1">By {news.provider.displayName} • {dayjs(news.pubDate).format("D MMM YYYY")}</Typography>
          </Grid>
          <Grid item>
            <TickerChip ticker={{name: news.finance.stockTickers[0].symbol, ticker: news.finance.stockTickers[0].symbol}}/>
          </Grid>
        </Grid>
        <Grid item>
          <Paper elevation={1} className={classes.card}>
            <Typography variant="body1">
              {news.summary}
            </Typography>
            <Link
              href={news.canonicalUrl.url}
              variant="body1"
              target="_blank"
              rel="noopener"
            >
              See more
            </Link>
          </Paper>
        </Grid>
        <Grid item style={{flex: 1}}/> {/*TODO: Make this work (need to set parent height)*/}
        <Grid item>
          <Typography variant="h6">Related News</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={5} style={{height: "1vh"}}>
            <Grid item sm={12} md={4}>
              <RelatedNews news={news}/>
            </Grid>
            <Grid item sm={12} md={4}>
              <RelatedNews news={news}/>
            </Grid>
            <Grid item sm={12} md={4}>
              <RelatedNews news={news}/>
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
