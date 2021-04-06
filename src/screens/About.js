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
import logo_webp from "../assets/logo_header/logo_header.webp";
// import sebastian from "../assets/team/sebastian.jpeg";
// import alessandro from "../assets/team/alessandro.jpeg";
// import riccardo from "../assets/team/riccardo.jpeg";
import luca from "../assets/team/luca.jpeg";

import LogosCarousel from "../components/Carousel";

const team = [
  {
    name: "Sebastian Cavada",
    role: "Back End Developer",
    quote: "I like stocks",
    image: "sebastian",
  },
  {
    name: "Alessandro Gottardi",
    role: "Front End Developer",
    quote: "This is a very smart quote",
    image: "alessandro",
  },
  {
    name: "Riccardo Rigoni",
    role: "Back End Developer",
    quote: "This is a very smart quote",
    image: "riccardo",
  },
  {
    name: "Luca Taddeo",
    role: "Front End Developer",
    quote: "This is a very smart quote",
    image: luca,
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
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Link to="/">
              <img src={logo_webp} alt="logo" style={{ width: "100%" }} />
            </Link>
          </Grid>
        </Grid>

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Idea
          </Typography>
          <Typography style={{ marginBottom: 7 }}>
            The four most dangerous words in investing are "This time it's
            different". From John Templeton's caution, we created StonX, a web
            application to easily access the world of trading.
          </Typography>
          <Typography style={{ marginBottom: 7 }}>
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
              <Grid item xs={6} md={3}>
                <Paper elevation={0} className={classes.card}>
                  <img
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
                justo, laoreet at congue vitae, ultricies ac purus. Proin rhoncus
                cursus facilisis. Sed vitae elit mattis, dictum enim eu, auctor
                ante. Phasellus sit amet dui nibh. Maecenas rhoncus augue in erat
                consequat, in commodo lacus mattis. Suspendisse eget urna mollis,
                varius leo non, sagittis orci.
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
            justo, laoreet at congue vitae, ultricies ac purus. Proin rhoncus
            cursus facilisis. Sed vitae elit mattis, dictum enim eu, auctor
            ante. Phasellus sit amet dui nibh. Maecenas rhoncus augue in erat
            consequat, in commodo lacus mattis. Suspendisse eget urna mollis,
            varius leo non, sagittis orci.
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
