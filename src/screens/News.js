import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import TickerChip from "../components/TickerChip";
import { Link as RouterLink } from 'react-router-dom';
import { PAGES } from "../routes";

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

const news = [
  {
    uuid: "1",
    title: "Unread News",
    provider: "Author Name",
    published_at: "2021-05-14T13:23:11Z",
    read: false,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. " +
      "Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. " +
      "In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed " +
      "faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. " +
      "Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. " +
      "Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, " +
      "tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas " +
      "iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, " +
      "aliquet sed orci.",
  },
  {
    uuid: "2",
    title: "Unread News",
    provider: "Author Name",
    published_at: "2021-05-14T13:23:11Z",
    read: false,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. " +
      "Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. " +
      "In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed " +
      "faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. " +
      "Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. " +
      "Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, " +
      "tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas " +
      "iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, " +
      "aliquet sed orci.",
  },
  {
    uuid: "3",
    title: "Read News",
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
  },
];

const NewsCard = (props) => {
  const classes = useStyles();
  const textColor = (props.news.read) ? "textSecondary" : "textPrimary";
  const parsedDate = new Intl.DateTimeFormat("default", {dateStyle: "medium"}).format(new Date(props.news.published_at));

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
                <Typography variant="body2" color={textColor}>By {props.news.provider} • {parsedDate}</Typography>
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

    return (
      <>
        <Typography variant={"h4"} className={classes.pageTitle}>
          News
        </Typography>
        <Grid container spacing={4} direction="column">
          {news.map((news) => (
            <Grid item key={news.uuid}>
              <NewsCard news={news}/>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }


export default News;
