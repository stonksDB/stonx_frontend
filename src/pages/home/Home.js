import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import NewsList from "../../components/NewsList";
import { UserStateContext } from "../../context/UserStateContext";
import LockIcon from "@material-ui/icons/Lock";
import { getRoute, PAGES } from "../../routes";
import IndexesCard from "./IndexesCard";
import MostPerformingCard from "./MostPerformingCard";
import LikedStocksCarousel from "../../components/charts/LikedStocksCarousel";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    portfolioIcon: {
      color: theme.palette.text.secondary,
      fontSize: 80,
    },
    link: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "underline",
    },
    card: theme.card,
  })
);

const Home = (props) => {
  const classes = useStyles();
  const { isLoggedIn } = useContext(UserStateContext);

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        Home
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={9}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <IndexesCard />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                <MostPerformingCard/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.card}>
                {!isLoggedIn() ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <LockIcon className={classes.portfolioIcon} />
                    <Typography>
                      <RouterLink
                        to={getRoute(PAGES.LOGIN).path}
                        className={classes.link}
                      >
                        Login
                      </RouterLink>{" "}
                      or{" "}
                      <RouterLink
                        to={getRoute(PAGES.REGISTRATION).path}
                        className={classes.link}
                      >
                        register
                      </RouterLink>{" "}
                      to benefit of full functionalities!
                    </Typography>
                  </Box>
                ) : (
                  <LikedStocksCarousel/>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={1} className={classes.card}>
            <NewsList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
