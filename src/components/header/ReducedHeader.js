import ImageWithFallback from "../../utils/ImageWithFallback";
import { AppBar, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeVariantContext } from "../../context/ThemeVariantContext";
import { lightTheme } from "../../theme";

const ReducedHeader = (props) => {
  const {theme} = useContext(ThemeVariantContext);
  const logoPath = (theme===lightTheme) ? "assets/logo_header/light/logo_header" : "assets/logo_header/dark/logo_header";

  return (
    <AppBar elevation={0} className={props.className} style={{backgroundColor: theme.palette.background.default}}>
      <Toolbar style={{alignSelf: "center"}}>
        <ImageWithFallback src={logoPath} width={200} alt={"stonx logo"}/>
      </Toolbar>
    </AppBar>
  );
};

export default ReducedHeader;
