import React, { useEffect, useState } from "react";
import { Avatar, Button, Grid, Link, Typography } from "@material-ui/core";
import generateColor from "../utils/ColorGenerator";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink } from "react-router-dom";
import withLoading from "../api/withLoading";
import API, { ENDPOINTS } from "../api/API";

const NewsHeader = (props) => {
  const avatarColor = generateColor(props.news.title);

  return (
    <Grid container alignItems="center" justify={"center"} direction="row" spacing={1}>
      <Grid item xs={4}>
        <Avatar variant="rounded" src={props.news.img} alt={props.news.title} style={{backgroundColor: avatarColor, width: "75%"}}/>
      </Grid>
      <Grid item xs={8}>
        <Grid container direction="column" justify="center" wrap="nowrap">
          <Grid item>
            <Link variant="overline" color="textPrimary" component={RouterLink} to={`${getRoute(PAGES.SINGLE_NEWS).path}/${props.news.uuid}`}>
              {props.news.provider}
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {props.news.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const NewsList = (props) => {   //TODO: Adjust number based on height
  const [state, setState] = useState({
    loading: false,
    news: [],
  });

  useEffect(() => {
    setState({loading: true});
    API
      .get(`${ENDPOINTS.NEWS}/TSLA.MI`)
      .then((res) => {
        const n = res.data === undefined ? [{uuid: 1, title: "No News", provider: "", published_at: ""}] : res.data;

        setState({loading: false, news: n});
      });
  }, [setState]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid container direction="column" spacing={2} style={{minHeight: "100%"}}>
        {props.news.map(item => (<Grid item key={ item.uuid}>
          <NewsHeader news={ item }/>
        </Grid>)) }
        <Grid item style={{flexGrow: 1, padding: 0}}/>
        <Grid item style={{alignSelf: "center"}}>
          <Button role="link"
                  color="primary"
                  component={RouterLink}
                  to={getRoute(PAGES.NEWS).path}>
            See more
          </Button>
        </Grid>
      </Grid>
    )
  });

  return (
    <InnerComponent isLoading={state.loading} news={state.news}/>
  );
};

export default NewsList;
