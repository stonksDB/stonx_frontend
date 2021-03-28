import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import logo_webp from "../assets/logo_header/logo_header.webp";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {},
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

const Registration = (props) => {
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
          Create a new account
        </Typography>
      </Grid>
      <Grid item style={{ paddingBottom: 30 }}>
        <Typography variant={"p"}>* field is mandatory!</Typography>
      </Grid>

      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name*"
              variant="outlined"
              className={classes.input}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name*"
              variant="outlined"
              className={classes.input}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Date Of Birth*"
              variant="outlined"
              className={classes.input}
              size="small"
            />{/*TODO: implement date picker using @material-ui/pickers */}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Country*"
              variant="outlined"
              className={classes.input}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Email Address*"
              variant="outlined"
              className={classes.input}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Email Address*"
              variant="outlined"
              className={classes.input}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Password*"
              variant="outlined"
              className={classes.input}
              size="small"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Password*"
              variant="outlined"
              className={classes.input}
              size="small"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
      </Grid>
{/*TODO: add section for selecting interests */}
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Typography>Already have an account? Click here to login!</Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
        <Button variant="contained" color="primary" className={classes.button}>
          Register
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

export default Registration;
