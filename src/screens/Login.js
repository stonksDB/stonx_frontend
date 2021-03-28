import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography, Link } from "@material-ui/core";
import logo_webp from "../assets/logo_header/logo_header.webp";
import { useHistory } from "react-router";
import { BlockRounded } from "@material-ui/icons";

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
  const goHome = () => {
    let path = "/";
    history.push(path);
  };
  const goRegister = () => {
    let path = "/registration";
    history.push(path);
  };
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
          <Link href="" onClick={goRegister} className={classes.link}>
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
          onClick={goHome}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
