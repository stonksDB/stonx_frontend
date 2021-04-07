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
    quote: "It fascinates me the stock market and I would like to make accessible to everyone",
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
  })
);

const About = (props) => {
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
          <Grid
            item
            xs={5}
            md={4}
            lg={3}
          >
            <Link to="/">
              <ImageWithFallback src="assets/logo_header/logo_header" alt="logo" />
            </Link>
          </Grid>
        </Grid>

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Idea
          </Typography>
          <Typography paragraph>
            The four most dangerous words in investing are "This time it's
            different". From John Templeton's caution, we created StonX, a web
            application to easily access the world of trading.
          </Typography>
          <Typography paragraph>
            For all the people who don't want endless tables, cluttered
            information and terrible User Experiences, StonX provides all the
            necessary information to be up-to-date with the latest market
            trends, with a fresh and intuitive Interface. No more compromising
            between data completeness and ease of use: our platform contains
            every information for your friendly neighbourhood trader, with a
            modern and clean design.
          </Typography>
          <Typography>StonX isn't just different: StonX is better.</Typography>
        </div>
        <Divider />

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Awesome Team
          </Typography>
          <Grid container spacing={6} style={{marginTop: 1}}>
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
        </div>
        <Divider />

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            Technologies
          </Typography>
          <Grid container direction={"row"} alignItems="center">
            <Grid item xs={12} sm={9}>
              <Typography variant={"subtitle1"} className={classes.title}>
                Back-End
              </Typography>
              <Typography paragraph>
                The backend is implemented with the well-known JavaScript runtime environment <a href="https://nodejs.org/en">NodeJS</a>.
                As libraries we used the following:
                <ul>
                  <li><a href="https://expressjs.com/">Express.JS 4</a> is needed to handle API request and create the adequate endpoint routes.</li>
                  <li><a href="https://sequelize.org/master/">Sequelize 6</a> is needed to make the server a real MVC architecture,
                  implementing the business logic for the data. The ORM framework allows both to model JavaScript objects
                  and automatically perform CRUD operations on top of the previously defined models.</li>
                  <li><a href="https://www.npmjs.com/package/pg">Pg 8</a> is needed to connect to the PostgreSQL database.
                    Since we aim to get a high number of requests per second it was fundamental for us to make some speedups,
                    thus we leveraged the power of the "pool" connections offered by “pg”</li>
                </ul>
              </Typography>
              <Typography variant={"subtitle1"} className={classes.title}>
                Front-End
              </Typography>
              <Typography paragraph>
                The frontend implementation is based on <a href="https://reactjs.org/">React</a>, a popular framework created by Facebook.
                It allows writing so-called "components" that can be reused in different pages and even shared with different developers.
              </Typography>
              <Typography paragraph>
                We strive to build an interface that is intuitive, essential, and easy to use. For this reason, Material Design was
                immediately chosen as the reference design in our application. We started by designing detailed
                mockups of each page using <a href="https://www.figma.com">Figma</a>, which have then been implemented
                using <a href="https://www.material-ui.com">Material UI</a>, together with <a href="https://nivo.rocks">Nivo</a> for the
                chart representations. This allowed to fulfil all the aforementioned objectives in a fast and productive way.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <LogosCarousel/>
            </Grid>
          </Grid>
        </div>
        <Divider />

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            Future Implementations
          </Typography>
          <Typography paragraph>
            Lot of ideas and proposals are flooding around, and we would like to develop some of them in the future.
            Our priority anyhow is to develop a portfolio management system, in which a user can keep track of
            his/her investments and have an overview of the gains or losses. Another point to which we aim is to be able
            to provide different type of assets: from crypto to bonds and securities. To achieve this, we must perform
            some changes to the database to abstract the concept away from just stocks.
          </Typography>
          <Typography>
            If we still have time our goal is to build the FIRST EVER IN THE WORLD peer stock exchange open 24/7.
            The idea is to give all our members the opportunity to sell their assets (potentially bought from another
            market) to other registered users, through a peer market exchange. A feature that we would like to try out
            is the microservices. Our target is to transform our monolithic architecture into microservices which is
            used by most of the biggest companies now a days.
          </Typography>
        </div>

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
