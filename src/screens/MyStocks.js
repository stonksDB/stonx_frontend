import React, { useContext } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import NewsList from "../components/NewsList";
import LikedStocksList from "../components/LikedStocksList";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ChartsCarousel from "../components/ChartsCarousel";
import { UserStateContext } from "../context/UserStateContext";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getRoute, PAGES } from "../routes";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    data: {
      textAlign: "right",
      fontWeight: "normal",
    },
    label: {
      fontWeight: "normal",
      color: theme.palette.text.secondary,
    },
    portfolioIcon: {
      color: theme.palette.text.secondary,
      fontSize: 80,
    },
    portfolioText: {
      color: theme.palette.text.secondary,
    },
    card: theme.card,
  })
);



const MyStocks = (props) => {
  const classes = useStyles();
  const {userState, isLoggedIn} = useContext(UserStateContext);
  const userInfo = (userState===null) ? null : userState.share_holder_info;
  dayjs.extend(customParseFormat);

  return (
    !isLoggedIn() ? <Redirect to={getRoute(PAGES.HOME).path}/> :
      <>
        <Typography variant="h4" component="h1" className={classes.pageTitle}>
          My Area
        </Typography>

        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={1} className={classes.card}>
                  <LikedStocksList/>
                </Paper>
              </Grid>
              {userState.likes.length > 0 ? (
                <Grid item xs={12}>
                  <Paper elevation={1} className={classes.card}>
                     <ChartsCarousel stocks={[1, 2, 3, 4]}/>
                  </Paper>
                </Grid>
              ) : (<Typography>{/*TODO: make a box to display a message if the user is not liking any stock! */ }</Typography>) }
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={1} className={classes.card}>
                  <Grid container alignContent="space-between" spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.label}>
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.data}>
                        {userInfo.first_name} {userInfo.last_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.label}>
                        Email
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.data}>
                        {userInfo.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.label}>
                        Date of Birth
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.data}>
                        {dayjs(userInfo.dob, "DD-MM-YYYY").format("DD MMM YYYY")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={1} className={classes.card}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CreditCardIcon className={classes.portfolioIcon}/>
                    <Typography className={classes.portfolioText}>
                      Trading and Portfolio features will be implemented soon:
                    </Typography>
                    <Typography className={classes.portfolioText}>
                      stay tuned!
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={1} className={classes.card}>
              <NewsList/>
            </Paper>
          </Grid>
        </Grid>
      </>
  );
};

export default MyStocks;
