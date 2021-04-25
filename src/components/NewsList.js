import React from "react";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import generateColor from "../utils/ColorGenerator";

const NewsHeader = (props) => {
  const avatarColor = generateColor(props.news.content);

  return (
    <Grid container alignItems="center" justify={"center"} direction="row" spacing={1}>
      <Grid item xs={4}>
        <Avatar variant="rounded" src="broken.img" alt={props.news.content} style={{backgroundColor: avatarColor, width: "75%"}}/>
      </Grid>
      <Grid item xs={8}>
        <Grid container direction="column" justify="center" wrap="nowrap">
          <Grid item>
            <Typography variant="overline" color="textPrimary">
              {props.news.site}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {props.news.content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const NewsList = (props) => {   //TODO: Fetch from server + Adjust number based on height
  let news = [
    {title: "News 1", site: "Site 1", image: "", content: "1 News content"},
    {title: "News 2", site: "Site 2", image: "", content: "2 News content"},
    {title: "News 3", site: "Site 3", image: "", content: "3 News content"},
    {title: "News 4", site: "Site 4", image: "", content: "4 News content"},
    {title: "News 5", site: "Site 5", image: "", content: "5 News content"},
    {title: "News 6", site: "Site 6", image: "", content: "6 News content"},
    {title: "News 7", site: "Site 7", image: "", content: "7 News content"},
  ];

  return (
    <Grid container direction="column" spacing={2} style={{minHeight: "100%"}}>
      {news.map(item => (
        <Grid item key={item.title}>
          <NewsHeader news={item}/>
        </Grid>
      ))}
      <Grid item style={{flexGrow: 1, padding: 0}}/>
      <Grid item style={{alignSelf: "center"}}>
        <Button role={"link"} href="/#news" color="primary">See more</Button>
      </Grid>
    </Grid>
  );
};

export default NewsList;
