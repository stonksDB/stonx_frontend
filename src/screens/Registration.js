import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: theme.card,
    button: theme.button,
    link: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "underline",
    },
    interest: {
      padding: 0,
    },
    input: theme.input,
  })
);

const interests = [
  { name: "Energy", id: 1, checked: false },
  { name: "Materials", id: 2, checked: false },
  { name: "Industrials", id: 3, checked: false },
  { name: "Consumer Discretionary", id: 4, checked: false },
  { name: "Consumer Staples", id: 5, checked: false },
  { name: "Health Care", id: 6, checked: false },
  { name: "Financials", id: 7, checked: false },
  { name: "Information Technology", id: 8, checked: false },
  { name: "Telecommunication Services", id: 9, checked: false },
  { name: "Utilities", id: 10, checked: false },
  { name: "Real Estate", id: 11, checked: false },
];

const Registration = (props) => {
  const classes = useStyles();

  const [state, setState] = useState(interests);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [dob, setDob] = useState();
  const [country, setCountry] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [passwordScore, setPasswordScore] = useState();

  ValidatorForm.addValidationRule("isEmail", (value) => {
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("confirmEmail", (confirmEmail) => {
    if (confirmEmail === email) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("isNameOrCountry", (value) => {
    if (/[a-zA-Z]{2,}/.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("isDate", (value) => {
    if (
      /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(
        value
      )
    ) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("confirmPassword", (confirmPassword) => {
    if (confirmPassword === password) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("isStrongPassword", (value) => {
    if (passwordScore > 1) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule("isPast", (value) => {
    if (value !== undefined) {
      var parts = value.split("/");
      var inputDate = new Date(
        parseInt(parts[2], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[0], 10)
      );
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      return inputDate < today;
    } else {
      return false;
    }
  });

  const handleSubmit = () => {
    alert("Submitting now");
  };

  const clickCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    interests.map((interest) => {
      if (interest.id === event.target.name) {
        interest.checked = event.target.checked;
      }
    });
    console.log(interests);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant={"h4"}>Create a new account</Typography>
        </Grid>
        <Grid item style={{ paddingBottom: 30 }}>
          <Typography variant={"body2"}>* field is mandatory!</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="firstName"
                label="First Name*"
                variant="outlined"
                className={classes.input}
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                validators={["required", "isNameOrCountry"]}
                errorMessages={["Required", "Insert a valid First Name!"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="lastName"
                label="Last Name*"
                variant="outlined"
                className={classes.input}
                size="small"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                validators={["required", "isNameOrCountry"]}
                errorMessages={["Required", "Insert a valid Last Name!"]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="dob"
                label="Date Of Birth*"
                variant="outlined"
                className={classes.input}
                size="small"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                validators={["required", "isDate", "isPast"]}
                errorMessages={[
                  "Required",
                  "Insert a valid date",
                  "You can't be born in the future!",
                ]}
              />
              {/*TODO: implement date picker using @material-ui/pickers */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="country"
                label="Country*"
                variant="outlined"
                className={classes.input}
                size="small"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                validators={["required", "isNameOrCountry"]}
                errorMessages={["Required", "Insert a valid Country!"]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="email"
                label="Email Address*"
                variant="outlined"
                className={classes.input}
                size="small"
                validators={["required", "isEmail"]}
                errorMessages={["Required", "Insert a valid email!"]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                name="emailConfirmation"
                label="Confirm Email Address*"
                variant="outlined"
                className={classes.input}
                size="small"
                validators={["required", "isEmail", "confirmEmail"]}
                errorMessages={[
                  "Required",
                  "Insert a valid email!",
                  "Mail addresses don't match!",
                ]}
                value={emailConfirm}
                onChange={(e) => setEmailConfirm(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <PasswordStrengthBar
                password={password}
                onChangeScore={(score) => setPasswordScore(score)}
                minLength={8}
                scoreWords={[]}
                shortScoreWord={""}
                style={{marginBottom: "0.5rem"}}
              />
              <TextValidator
                label="Password*"
                variant="outlined"
                className={classes.input}
                size="small"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validators={["required", "isStrongPassword"]}
                errorMessages={["Required", "Password is too weak!"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label="Confirm Password*"
                variant="outlined"
                className={classes.input}
                size="small"
                type="password"
                autoComplete="current-password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                validators={["required", "confirmPassword"]}
                errorMessages={["Required", "Passwords don't match!"]}
                style={{marginTop: "0.95rem"}} //TODO: find better way to align the two password input fields
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Paper elevation={0} className={classes.card}>
            <Typography variant={"h6"} style={{ paddingBottom: 3 }}>
              Pick your interests!
            </Typography>
            <FormGroup>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="center"
                direction="row"
              >
                {interests.map((interest) => (
                  <Grid
                    key={interest.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className={classes.interest}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          name={interest.id.toString()}
                          onClick={clickCheckBox}
                        />
                      }
                      label={interest.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%" }}>
          <Typography>
            Already have an account? Click here to{" "}
            <RouterLink
              to={getRoute(PAGES.LOGIN).path}
              className={classes.link}
            >
              login!
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
            Register
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

export default Registration;
