import {
  Button,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import LogosCarousel from "../components/Carousel";
import ImageWithFallback from "../utils/ImageWithFallback";
import Markdown from "../utils/Markdown";
import AboutSections from "./AboutContent";

const team = [
  {
    name: "Sebastian Cavada",
    role: "Back End Developer",
    quote: "I like stocks",
    image: "assets/team/Sebastian",
  },
  {
    name: "Alessandro Gottardi",
    role: "Front End Developer",
    quote: "This is a very smart quote",
    image: "assets/team/Alessandro",
  },
  {
    name: "Riccardo Rigoni",
    role: "Back End Developer",
    quote:
      "It fascinates me the stock market and I would like to make accessible to everyone",
    image: "assets/team/Riccardo",
  },
  {
    name: "Luca Taddeo",
    role: "Front End Developer",
    quote: "This is a very smart quote",
    image: "assets/team/Luca",
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: {
      ...theme.card,
      textAlign: "center",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    container: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(5),
    },
    title: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(1),
    },
    sectionContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    button: { ...theme.button, marginTop: theme.spacing(5) },
    memberImage: {
      width: "75%",
      borderRadius: 15,
      marginBottom: theme.spacing(2),
    },
    memberRole: {
      textTransform: "uppercase",
      fontSize: 11,
      lineHeight: 1,
    },
    memberName: {
      fontWeight: "bold",
      fontSize: 18,
    },
    memberQuote: {
      fontStyle: "italic",
      fontSize: 14,
    },
    listItem: {
      marginTop: theme.spacing(1),
    },
  })
);

const About = (props) => {
  const aboutSections = AboutSections;
  const classes = useStyles();
  const history = useHistory();

  const goHome = () => {
    let path = "/";
    history.push(path);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} lg={8} className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={5} md={4} lg={3}>
            <Link to="/">
              <ImageWithFallback
                src="assets/logo_header/logo_header"
                alt="logo"
              />
            </Link>
          </Grid>
        </Grid>

        <Markdown children={aboutSections.idea} />
        <Divider />

        <section className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Awesome Team
          </Typography>
          <Grid container spacing={6} style={{ marginTop: 1 }}>
            {team.map((member) => (
              <Grid item xs={6} md={3} key={member.name}>
                <Paper elevation={0} className={classes.card}>
                  <ImageWithFallback
                    src={member.image}
                    className={classes.memberImage}
                    alt={member.name}
                  />
                  <Typography className={classes.memberRole}>
                    {member.role}
                  </Typography>
                  <Typography className={classes.memberName}>
                    {member.name}
                  </Typography>
                  <Typography className={classes.memberQuote}>
                    {member.quote}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </section>
        <Divider />

        <section>
          <Grid container direction={"row"} alignItems="center">
            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesData} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <LogosCarousel />
            </Grid>

            <Grid item xs={12} sm={3}>
              <LogosCarousel />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesBackend} />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesFrontend} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <LogosCarousel />
            </Grid>
          </Grid>
        </section>
        <Divider />

        <Markdown children={aboutSections.future} />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={goHome}
        >
          To The Moon!
        </Button>
      </Grid>
    </Grid>
  );
};

export default About;
