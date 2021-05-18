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
          <Typography variant="subtitle2">Title</Typography>
        </Grid>
        <Grid item>
          <Typography>Summary</Typography>
        </Grid>
        <Grid item>
          <Typography>Full content at link</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const SingleNews = (props) => {
  const ticker = {
    name: "Tesla Inc.",
    short: "TSLA.MI",
    percentage: -12.2,
    id: 1,
  };
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item container direction="row" justify="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h4">News Title</Typography>
          <Typography variant="body1">By Author Name • Jan 12 2021</Typography>
        </Grid>
        <Grid item>
          <TickerChip ticker={ticker} showFullName={false}/>
        </Grid>
      </Grid>
      <Grid item>
        <Paper elevation={1} className={classes.card}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, aliquet sed orci.
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
