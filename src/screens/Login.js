import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import logo_webp from "../assets/logo_header/logo_header.webp";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      paddingBottom: theme.spacing(3),
    },
    card: theme.card,
    button: {
      width: "100%",
      display: "block",
      borderRadius: "15px",
      padding: 7,
    },
    input: theme.input,
  })
);

const Login = (props) => {
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
        <Typography>Don't have an account? Click here to register!</Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Button variant="outlined" color="primary" className={classes.button} ì>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
