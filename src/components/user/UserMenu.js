import generateColor from "../../utils/ColorGenerator";
import { Avatar, Box, ButtonBase, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { MoreVert } from "@material-ui/icons";
import UserPopup from "./UserPopup";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const UserAvatar = (props) => {
  const fullName = `${props.userInfo.first_name} ${props.userInfo.last_name}`;
  const avatarColor = generateColor(fullName);

  return (
    <Avatar style={{backgroundColor: avatarColor}}>{fullName[0]}</Avatar>
  )
};

const UserMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
    }
  };

  const userInfo = props.userState.share_holder_info;
  const userFullName = `${userInfo.first_name} ${userInfo.last_name}`;

  if (props.reduced)
    return (
      <IconButton
        style={{padding: 2}}
        onClick={handleMenuClick}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        {props.isLoggedIn() ? <UserAvatar userInfo={props.userState.share_holder_info}/> : <MoreVert/>}
        <UserPopup id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} {...props}/>
      </IconButton>
    )
  else
    return (
      <ButtonBase
        style={{width: "100%"}}
        onClick={handleMenuClick}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Grid item lg={2} xs={3}>
            <UserAvatar userInfo={userInfo} />
          </Grid>
          <Grid item lg={8} xs={7}>
            <Typography align="left" variant="h6" color="textPrimary">
              {userFullName}
            </Typography>

            <Box display={{ xs: 'none', lg: 'block'}}>
              <Typography
                align="left"
                variant="body2"
                color="textPrimary"
              >{`Watching ${props.userState.likes.length} stocks`}</Typography>
            </Box>
          </Grid>
          <Grid item style={{flexGrow: 1, padding: 0}} lg xs={false}>
          </Grid>
          <Grid item lg={1} xs={1}>
            <KeyboardArrowDownIcon color="action" />
          </Grid>
        </Grid>
        <UserPopup id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} {...props}/>
      </ButtonBase>
    );
};

export default UserMenu;
