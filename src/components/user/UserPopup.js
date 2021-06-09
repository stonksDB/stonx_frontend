import {
  Button, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Popover, Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Brightness4, MeetingRoom, Share, VpnKey } from "@material-ui/icons";
import { ThemeVariantContext } from "../../context/ThemeVariantContext";
import { getRoute, PAGES } from "../../routes";
import { Link as RouterLink } from 'react-router-dom';
import { UserStateContext } from "../../context/UserStateContext";
import { logout } from "../../api/API";

const useStyles = makeStyles((theme) =>
  createStyles({
    menu: {
      ...theme.card,
      width: 400,
      padding: 5,
      borderRadius: "0px 0px 15px 15px",
    },
    menuText: {
      fontWeight: "bold",
      color: theme.palette.text.primary,
    },
  })
);

const UserPopup = (props) => {
  const classes = useStyles();
  const toggleTheme = useContext(ThemeVariantContext);
  const {setUserState} = useContext(UserStateContext);

  const handleLogout = () => {
    setUserState(null);
    logout().then();
  };

  return (
    <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      style={{ background: "transparent" }}
      PaperProps={{
        style: {
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          marginTop: 5,
        },
        elevation: 3,
      }}
    >
      <Paper className={classes.menu}> {/*TODO: Adapt to parent*/}
        <List spacing={2}>
          <ListItem button>
            <ListItemIcon><Brightness4 /></ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" className={classes.menuText} onClick={() => toggleTheme()}>
                  Toggle Color
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Share /></ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" className={classes.menuText}>
                  Share
                </Typography>
              }
            />
          </ListItem>
          {props.isLoggedIn() ? (
            <ListItem button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </ListItem>
          ) : (
            <>
              <ListItem button>
                <ListItemIcon><VpnKey /></ListItemIcon>
                <ListItemText
                  primary={
                    <Link component={RouterLink} to={getRoute(PAGES.LOGIN).path} variant="body1" className={classes.menuText}>
                      Login
                    </Link>
                  }
                />
              </ListItem>
              <ListItem button>
              <ListItemIcon><MeetingRoom /></ListItemIcon>
              <ListItemText
                primary={
                  <Link component={RouterLink} to={getRoute(PAGES.LOGIN).path} variant="body1" className={classes.menuText}>
                  Register
                  </Link>
                }
              />
              </ListItem>
            </>
          )}
        </List>
      </Paper>
    </Popover>
  );
};

export default UserPopup;
