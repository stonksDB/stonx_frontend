import React from "react";
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
import { Email } from "@material-ui/icons";

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

  const [state, setState] = React.useState(interests);

  const [email, setEmail] = React.useState();

  const handleSubmit = () => {};

  const clickCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    interests.map((interest) => {
      if (interest.id === event.target.name) {
        interest.checked = event.target.checked;
      }
    });
    console.log(interests);
  };

  ValidatorForm.addValidationRule("isEmail", (value) => {
    if (value !== "test") {
      return false;
    } else {
      return true;
    }
  });

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
              <TextField
                label="First Name*"
                variant="outlined"
                className={classes.input}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date Of Birth*"
                variant="outlined"
                className={classes.input}
                size="small"
              />
              {/*TODO: implement date picker using @material-ui/pickers */}
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextValidator
                label="Email Address*"
                variant="outlined"
                className={classes.input}
                size="small"
                validators={["required", "isEmail"]}
                errorMessages={["Required", "Use a valid email!"]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password*"
                variant="outlined"
                className={classes.input}
                size="small"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
