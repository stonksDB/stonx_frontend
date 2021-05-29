import ImageWithFallback from "../../utils/ImageWithFallback";
import { AppBar, Toolbar, useTheme } from "@material-ui/core";
import React from "react";

const ReducedHeader = (props) => {
  const theme = useTheme();

  return (
    <AppBar elevation={0} className={props.className} style={{backgroundColor: theme.palette.background.default}}>
      <Toolbar style={{alignSelf: "center"}}>
        <ImageWithFallback src={"assets/logo_header/logo_header"} width={200}/>
      </Toolbar>
    </AppBar>
  );
};

export default ReducedHeader;
