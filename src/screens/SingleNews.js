import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/stocks/TickerChip";
import withLoading from "../api/withLoading";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink, useParams } from "react-router-dom";
import { getNews, getSingleNews } from "../api/API";
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
    externalGrid: {
      height: "100%",
      paddingBottom: 300,
    },
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
  const {id} = useParams();

  const [state, setState] = useState({
    isLoading: true,
    news: {},
    relatedNews: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({isLoading: true, news: {}, relatedNews: []});

    async function getData() {
      const singleNews = await getSingleNews(id);
      const relatedNews = await getNews(id);

      return {singleNews: singleNews, relatedNews: relatedNews};
    }

    getData(id)
      .then((data) => {
        isActive && setState({isLoading: false, news: data.singleNews, relatedNews: data.relatedNews.slice(1,4)});
        return () => {
          isActive = false;
        };
      });
  }, [setState, id]);

  const InnerComponent = withLoading((props) => {
    console.log(props.news);
    let news = props.news.data.contents[0].content;
    return (
      <Grid container direction="column" spacing={3} className={classes.externalGrid}>
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
            <Typography variant="subtitle2">
              {news.summary}
            </Typography>
            <Typography variant="body1" style={{paddingTop: 10}}>
              {new DOMParser().parseFromString(news.body.markup, "text/html").body.textContent.substring(210, 750)}
              {"..."}
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
        <Grid item style={{flexGrow: 1}}/> {/*TODO: Make this work (need to set parent height)*/}
        <Grid item>
          <Typography variant="h6">Related News</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={5} style={{height: "1vh"}}>
            {props.relatedNews.map((related) =>
              <Grid item sm={12} md={4} key={related.uuid}>
                <RelatedNews news={related}/>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <InnerComponent isLoading={state.isLoading} news={state.news} relatedNews={state.relatedNews}/>
  );
};

export default SingleNews;
