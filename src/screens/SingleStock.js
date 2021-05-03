import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Chip,
  Box,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MarketChart from "../components/MarketChart";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {},
    card: theme.card,
    positive: {
      color: theme.palette.success.main,
      display: "inline-flex",
      fontWeight: "normal",
    },
    negative: {
      color: theme.palette.error.main,
      display: "inline-block",
      fontWeight: "normal",
    },
    chip: {
      marginRight: 15,
      fontSize: 17,
      fontWeight: "normal",
    },
  })
);

const SingleStock = (props) => {
  const [likedStock, likeStock] = useState(false);
  const [value, setValue] = useState(100);

  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={9}>
          <Grid container direction="row" style={{ paddingBottom: 25 }}>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Chip
                    color="primary"
                    label="TSLA.MI"
                    className={classes.chip}
                  />
                  <Typography variant={"h4"} className={classes.pageTitle}>
                    Stock Title
                  </Typography>
                </Box>
                <IconButton
                  aria-label="delete"
                  color="primary"
                  style={{ float: "right" }}
                  onClick={() => likeStock(!likedStock)}
                >
                  {likedStock ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h4"} style={{ display: "inline-block" }}>
                800
              </Typography>
              <Typography
                variant={"h6"}
                style={{ display: "inline-block", paddingRight: 20 }}
              >
                &nbsp;USD
              </Typography>

              {value > 0 ? (
                <>
                  <Typography variant={"h6"} className={classes.positive}>
                    + {Math.abs(value)} (0.5%)
                    {/*TODO: implement icon (alignment will be shitty)*/}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant={"h6"} className={classes.negative}>
                    - {Math.abs(value)} (0.5%)
                    {/*TODO: implement icon (alignment will be shitty)*/}
                  </Typography>
                </>
              )}

              <Typography variant={"body2"} style={{ display: "block" }}>
                &nbsp; NASDAQ, gg/mm/yyyy
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                <MarketChart
                  height="40vh"
                  points="first"
                  enableGridX
                  enableGridY
                  enableLegend={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.card}>
                <Grid container>
                  <Grid item xs={6}>
                    Here go data (col 1)
                  </Grid>
                  <Grid item xs={6}>
                    Here go data (col 2)
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={0} className={classes.card}>
            Related news
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleStock;
