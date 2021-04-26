import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { getRoute, PAGES } from "../routes";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
    button: theme.button,
    link: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "underline",
    },
    input: theme.input,
  })
);

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      style={{ width: "100%" }}
      spacing={2}
    >
      <Grid item>
        <Typography variant={"h4"} className={classes.pageTitle}>
          Access to your account
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <TextField
          label="Username"
          variant="outlined"
          className={classes.input}
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <TextField
          label="Password"
          variant="outlined"
          className={classes.input}
          size="small"
          type="password"
          autoComplete="current-password"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Typography>
          Don't have an account? Click here to{" "}
          <Link to={getRoute(PAGES.REGISTRATION).path} className={classes.link}>
            register!
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => history.push(getRoute(PAGES.HOME).path)}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
