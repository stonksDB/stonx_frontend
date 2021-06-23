import { toggleTickerPreference } from "../api/API";
import React, { useContext, useEffect, useState } from "react";
import { UserStateContext } from "../context/UserStateContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";

const TickerHeart = (props) => {
  const {userState, setUserState} = useContext(UserStateContext);
  const [likedTicker, likeTicker] = useState(false);


  useEffect(() => {
    likeTicker(userState.likes.some((item) => item===props.ticker.ticker));
  }, [userState, likeTicker, props.ticker]);

  const toggleTicker = (ticker) => {
    likeTicker(!likedTicker);
    let newLikes = userState.likes, action;

    if (userState.likes.some(elem => elem===ticker.ticker)) {
      action = "delete";
      newLikes = userState.likes.filter((elem) => elem !== ticker.ticker);
    } else {
      action = "add";
      newLikes.push(ticker.ticker);
    }

    let cloneObj = JSON.parse(JSON.stringify(userState));
    cloneObj.likes = newLikes;
    setUserState(cloneObj);
    console.log(cloneObj);
    toggleTickerPreference(ticker.id, action).then().catch((err) => console.log(err));
  };

  return (
    <IconButton
      aria-label="delete"
      color="primary"
      style={{float: "right"}}
      onClick={() => toggleTicker(props.ticker)}
    >
      {likedTicker ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
    </IconButton>
  );
};

export default TickerHeart;
