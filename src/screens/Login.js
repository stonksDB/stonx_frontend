import React, { useContext, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { getRoute, PAGES } from "../routes";
import { ValidatorForm } from "react-material-ui-form-validator";
import { login } from "../api/API";
import { UserStateContext } from "../context/UserStateContext";
import { useSnackbar } from "notistack";
import TextValidatorWithLabel from "../components/TextValidatorWithLabel";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserState } = useContext(UserStateContext);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const classes = useStyles();

  ValidatorForm.addValidationRule("isEmail", (value) => {
    return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value);
  });

  const handleSubmit = () => {
    login({
      email: email,
      password: password,
    })
      .then((data) => {
        setUserState(data);
        enqueueSnackbar("Success!", { variant: "success" });
        setTimeout(() => history.push(getRoute(PAGES.HOME).path), 300);
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data, { variant: "error" });
      });
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      {" "}
      {/*TODO: Validation*/}
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant={"h4"} className={classes.pageTitle}>
            Access to your account
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <TextValidatorWithLabel
            label="Email"
            variant="outlined"
            className={classes.input}
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validators={["required", "isEmail"]}
            errorMessages={["Required", "Insert a valid Email!"]}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <TextValidatorWithLabel
            label="Password"
            variant="outlined"
            className={classes.input}
            size="small"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            validators={["required"]}
            errorMessages={["Required"]}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Typography>
            Don't have an account? Click here to{" "}
            <RouterLink
              to={getRoute(PAGES.REGISTRATION).path}
              className={classes.link}
            >
              register!
            </RouterLink>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            component={RouterLink}
            to={getRoute(PAGES.HOME).path}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default Login;
