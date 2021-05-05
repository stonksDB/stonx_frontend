import { Button, Grid, ListItem, ListItemIcon, ListItemText, Paper, Popover, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Brightness4, Share } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: theme.card,
    menuText: {
      fontWeight: "bold",
    },
  })
);

const UserMenu = (props) => {
  const classes = useStyles();

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
    >
      <Paper style={{width: 400}} className={classes.card}>         {/*TODO: Adapt to parent*/}
        <Grid container direction="column" spacing="2">
          <Grid item>
            <ListItem button>
              <ListItemIcon> <Brightness4/> </ListItemIcon>
              <ListItemText primary={<Typography variant="body1" className={classes.menuText}>Dark Mode</Typography>} />
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem button>
              <ListItemIcon> <Share/> </ListItemIcon>
              <ListItemText primary={<Typography variant="body1" className={classes.menuText}>Share</Typography>} />
            </ListItem>
          </Grid>
          <Grid item>
            <Button onClick={console.log("Logout")} variant="outlined" color="primary" fullWidth>Logout</Button>
          </Grid>
        </Grid>
      </Paper>
    </Popover>
  );
};

export default UserMenu;
