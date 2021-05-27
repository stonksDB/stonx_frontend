import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";
import withLoading from "../api/withLoading";
import API, { ENDPOINTS } from "../api/API";
import { parseDate } from "../utils/Dates";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink } from "react-router-dom";

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

const mockupNews = {
  uuid: "3",
  title: "Test News",
  provider: "Author Name",
  published_at: "2021-05-14T13:23:11Z",
  read: true,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. " +
    "Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. " +
    "In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed " +
    "faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. " +
    "Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. " +
    "Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, " +
    "tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas " +
    "iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, " +
    "aliquet sed orci.",
};

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
    loading: false,
    news: mockupNews,
  });

  useEffect(() => {
    setState({loading: true});
    API
      .get(`${ENDPOINTS.NEWS}/single/${newsUuid}`)
      .then((res) => {
        const n = res.data === undefined ? mockupNews : res.data;

        setState({loading: false, news: n});
      });
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
