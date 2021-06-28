import React, { useContext, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import {
  Button,
  Checkbox,
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { getRoute, PAGES } from "../routes";
import { Link as RouterLink, useHistory } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { register } from "../api/API";
import { useSnackbar } from "notistack";
import TextValidatorWithLabel from "../components/TextValidatorWithLabel";
import { UserStateContext } from "../context/UserStateContext";
import ValidatorDatePicker from "../components/ValidatorDatePicker";
import dayjs from "dayjs";

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
    strengthBar: {
      [`& >p`]: {
        color: `${theme.palette.text.secondary} !important`,
      },
    },
    datePicker: {
      ...theme.input,
      [`& >div`]: {
        [`&::before`]: {
          borderBottom: 0,
          [`&:hover`]: {
            border: 0,
          }
        },
        [`& >input`]: {
          paddingLeft: 10,
          paddingTop: 15,
        },

        //height: 25,
        marginTop: 0,
        color: theme.palette.text.primary,
      },
      [`& >label`]: {
        zIndex: 4000,
        paddingLeft: 10,
      },
    },
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
  const history = useHistory();
  const {enqueueSnackbar} = useSnackbar();
  const {setUserState} = useContext(UserStateContext);

  const [state, setState] = useState(interests);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [dob, setDob] = useState(dayjs());
  const [country, setCountry] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [passwordScore, setPasswordScore] = useState();

  ValidatorForm.addValidationRule("isEmail", (value) => {
    return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value);
  });
  ValidatorForm.addValidationRule("confirmEmail", (confirmEmail) => {
    return confirmEmail === email;
  });
  ValidatorForm.addValidationRule("isNameOrCountry", (value) => {
    return /[a-zA-Z]{2,}/.test(value);
  });
  ValidatorForm.addValidationRule("isDate", (value) => {
    return /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(
      value
    );
  });
  ValidatorForm.addValidationRule("confirmPassword", (confirmPassword) => {
    return confirmPassword === password;
  });
  ValidatorForm.addValidationRule("isStrongPassword", (value) => {
    return passwordScore > 1;
  });
  ValidatorForm.addValidationRule("isPast", (value) => {
    if (value !== undefined)
      return value.isBefore(dayjs(new Date()));
    else
      return false;

  });

  const handleSubmit = () => {
    register({
      firstName: firstName,
      lastName: lastName,
      dob: dob.format('DD-MM-YYYY'),
      country: country,
      email: email,
      confirmationEmail: emailConfirm,
      password: password,
      confirmationPassword: passwordConfirm,
      follows: interests
        .filter((elem) => elem.checked === true)
        .map((elem) => elem.id),
    }).then((data) => {
      setUserState(data);
      enqueueSnackbar("Success!", {variant: "success"});
      setTimeout(() => history.push(getRoute(PAGES.HOME).path), 300);
    }).catch((error) => {
      enqueueSnackbar(error.response.data, {variant: "error"});
    });
  };

  const clickCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    interests.forEach((interest) => {
      if (interest.id === Number(event.target.name)) {
        interest.checked = event.target.checked;
      }
    });
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
              <TextValidatorWithLabel
                name="firstName"
                label="First Name*"
                variant="outlined"
                className={classes.input}
                size="small"
                title={"firstName"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                validators={["required", "isNameOrCountry"]}
                errorMessages={["Required", "Insert a valid First Name!"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidatorWithLabel
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
              <ValidatorDatePicker
                name="dob"
                label="Date Of Birth*"
                variant="outlined"
                className={classes.datePicker}
                format="DD/MM/YYYY"
                size="small"
                value={dob}
                onChange={(value) => setDob(value)}
                validators={["required", "isPast"]}
                errorMessages={[
                  "Required",
                  "You can't be born in the future!",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidatorWithLabel
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
              <TextValidatorWithLabel
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
              <TextValidatorWithLabel
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
              <TextValidatorWithLabel
                label="Password*"
                variant="outlined"
                className={classes.input}
                size="small"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validators={["required", "isStrongPassword"]}
                errorMessages={["Required", ""]}

              />
              <PasswordStrengthBar
                password={password}
                onChangeScore={(score) => setPasswordScore(score)}
                minLength={8}
                scoreWords={["Too Weak", "Too Weak", "Just Ok", "Good", "Strong"]}
                shortScoreWord="Too Short"
                className={classes.strengthBar}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidatorWithLabel
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
              />
            </Grid>
            <Grid item xs={12}/>
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
