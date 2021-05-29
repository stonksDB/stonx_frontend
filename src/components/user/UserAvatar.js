import generateColor from "../../utils/ColorGenerator";
import {Avatar} from "@material-ui/core";
import React from "react";

const UserAvatar = (props) => {
  const fullName = `${props.userData.firstName} ${props.userData.lastName}`;
  const avatarColor = generateColor(fullName);

  return (
    <Avatar alt={fullName} src={props.userData.picture} style={{backgroundColor: avatarColor}} />
  )
}

export default UserAvatar;