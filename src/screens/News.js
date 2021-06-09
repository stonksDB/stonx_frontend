import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";
import { Link as RouterLink } from 'react-router-dom';
import { PAGES } from "../routes";
import withLoading from "../api/withLoading";
import { getNews } from "../api/API";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: {
      ...theme.card,
      '&:hover': {
        boxShadow: `0px 1px 0px 0px ${ theme.palette.primary.main }, 0px 1px 0px 0px ${ theme.palette.primary.main },
        0px 0px 3px 0px ${ theme.palette.primary.main }`,
      }
    },
    linkHover: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    }
  })
);

const NewsCard = (props) => {
  const classes = useStyles();
  const textColor = (props.news.read) ? "textSecondary" : "textPrimary";

  return (
    <Paper elevation={1} className={classes.card} style={{paddingTop: 10}}>
      <Grid container direction="column" justify="center" alignItems="flex-start">
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Link component={RouterLink} to={`${PAGES.NEWS}/${props.news.uuid}`} variant="h5" color={textColor} className={classes.linkHover}>{props.news.title}</Link>
          </Grid>
          <Grid item>
            <Grid container direction="column" justify="center" alignItems="flex-end">
              <Grid item>
                <TickerChip disabled={props.news.read}/>
              </Grid>
              <Grid item>
                <Typography variant="body2" color={textColor}>By {props.news.provider} • {dayjs(props.news.published_at).parse("DD MMM YYYY")}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item  style={{paddingTop: 10}}>
          <Typography variant="body1" color={textColor}>{props.news.content}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const News = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    loading: false,
    news: [],
  });

  useEffect(() => {
    let isActive = false;
    setState({loading: true});
    getNews("TSLA.MI")
      .then((res) => isActive && setState({loading: false, news: res}));

    return () => {
      isActive = false;
    };
  }, [setState]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid container spacing={4} direction="column">
        {props.news.map((news) => (
          <Grid item key={news.uuid}>
            <NewsCard news={news}/>
          </Grid>
        ))}
      </Grid>
    );
  });

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        News
      </Typography>
      <InnerComponent isLoading={state.loading} news={state.news}/>
    </>
  );
}

export default News;
