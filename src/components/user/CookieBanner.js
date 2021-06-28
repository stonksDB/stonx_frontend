import React, { useState, useContext } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { UserStateContext } from "../../context/UserStateContext";

const useStyles = makeStyles((theme) =>
  createStyles({
    data: {
      textAlign: "right",
      fontWeight: "normal",
    },
    label: {
      fontWeight: "normal",
      color: theme.palette.text.secondary,
    },
    button: { ...theme.button, padding: theme.spacing(0.5) },
    snackbar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      borderRadius: 15,
    },
  })
);

const CookieBanner = (props) => {
  const [open, setOpen] = useState(true);
  const { setCookies } = useContext(UserStateContext);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setCookies(true);
  };

  return (
    <Snackbar
      open={open}
      message="We use Cookies to improve your experience on our site. Your data will be treated with respect towards the current DPA and GDPR"
      className={classes.snackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      ContentProps={{
        className: classes.snackbar,
      }}
      action={
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="small"
          onClick={handleClose}
        >
          OK
        </Button>
      }
    />
  );
};

export default CookieBanner;
