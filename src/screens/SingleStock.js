import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Icon,
  Chip,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = (theme) => ({
  pageTitle: {
    fontWeight: "bold",
  },
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
    marginBottom: 7,
  },
});

class SingleStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likedStock: false, value: 100 };
  }

  likeStock = () => {
    this.setState({ likedStock: !this.state.likedStock });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" style={{ paddingBottom: 25 }}>
              <Grid item xs={12}>
                <Typography variant={"h4"} className={classes.pageTitle}>
                  <Chip
                    color="primary"
                    label="TSLA.MI"
                    className={classes.chip}
                  />
                  {/*TODO:find better way to align chip */}
                  Stock Title
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={this.likeStock}
                  >
                    {this.state.likedStock ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Typography>
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

                {this.state.value > 0 ? (
                  <>
                    <Typography variant={"h6"} className={classes.positive}>
                      + {Math.abs(this.state.value)} (0.5%){" "}
                      {/*TODO: implement icon (alignment will be shitty)*/}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant={"h6"} className={classes.negative}>
                      - {Math.abs(this.state.value)} (0.5%)
                      {/*TODO: implement icon (alignment will be shitty)*/}
                    </Typography>
                  </>
                )}

                <Typography variant={"p"} style={{ display: "block" }}>
                  &nbsp; NASDAQ, gg/mm/yyyy
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction="row" spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.card}>
                  Here goes the big chart
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
  }
}

export default withStyles(useStyles, { withTheme: true })(SingleStock);
