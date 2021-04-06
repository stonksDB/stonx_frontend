import {
  Button,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo_webp from "../assets/logo_header/logo_header.webp";
import LogosCarousel from "../components/Carousel";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
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
      <Grid item xs={12} sm={9} lg={7} className={classes.container}>
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
          <Typography style={{marginBottom: 7}}>
            The four most dangerous words in investing are "This time it's different".
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
        <Divider />

        <div className={classes.sectionContainer}>
          <Typography variant={"h5"} className={classes.title}>
            The Awesome Team
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
