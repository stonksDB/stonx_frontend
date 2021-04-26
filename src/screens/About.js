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
import ImageWithFallback from "../utils/ImageWithFallback";
import Markdown from "../utils/Markdown";
import AboutSections from "./AboutContent";
import { getRoute, PAGES } from "../routes";

const team = [
  {
    name: "Sebastian Cavada",
    role: "Back End Developer",
    quote: "I like the stocks",
    image: "assets/team/Sebastian",
  },
  {
    name: "Alessandro Gottardi",
    role: "Front End Developer",
    quote: "Diamond hands 💎🙌",
    image: "assets/team/Alessandro",
  },
  {
    name: "Riccardo Rigoni",
    role: "Back End Developer",
    quote: "I am fascinated by the stock market and would like to make it accessible to everyone",
    image: "assets/team/Riccardo",
  },
  {
    name: "Luca Taddeo",
    role: "Front End Developer",
    quote: "Apes Together Strong",
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
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
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

        <section className={classes.sectionContainer}>
          <Markdown children={aboutSections.idea} />
        </section>
        <Divider />

        <section className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Awesome Team
          </Typography>
          <Grid container spacing={6} style={{ marginTop: 1, marginBottom: 1 }}>
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

        <section className={classes.sectionContainer}>
          <Grid container direction={"row"} alignItems="center" spacing={7}>
            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesData} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Grid container direction={"column"} alignItems="center" justify="center" spacing={10}>
                <Grid item>
                  <ImageWithFallback
                    src="assets/technologies/Postgresql"
                    alt="Postgres"
                  />
                </Grid>
                <Grid item>
                  <ImageWithFallback
                    src="assets/technologies/yfinance"
                    alt="Yahoo Finance"
                  />
                </Grid>
                <Grid item>
                  <ImageWithFallback
                    src="assets/technologies/finnhub"
                    alt="Finnhub"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={3}>
              <ImageWithFallback
                src="assets/technologies/Node"
                alt="Node Js"
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesBackend} />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Markdown children={aboutSections.technologiesFrontend} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ImageWithFallback
                src="assets/technologies/React"
                alt="React"
              />
            </Grid>
          </Grid>
        </section>
        <Divider />

        <section className={classes.sectionContainer}>
          <Markdown children={aboutSections.future} />
        </section>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => history.push(getRoute(PAGES.HOME).path)}
        >
          To The Moon!
        </Button>
      </Grid>
    </Grid>
  );
};

export default About;
