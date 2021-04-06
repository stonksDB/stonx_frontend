import {
  Link, Paper,
} from "@material-ui/core";
import React from "react";
import nodejs from "../assets/technologies/Node.png";
import sequelize from "../assets/technologies/Sequelize.png";
import postgresql from "../assets/technologies/Postgresql.png";
import react from "../assets/technologies/React.png";
import materialUi from "../assets/technologies/MaterialUi.png";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@material-ui/core/styles";

const CarouselItem = (props) => {
  const theme = useTheme();

  return (
    <Paper elevation={0} style={{backgroundColor: theme.palette.background.default, textAlign: "center"}}>
      <Link href={props.item.url} title={props.item.name} target="_blank">
        <img style={{width: "70%", backgroundColor: "transparent"}} src={props.item.logo} alt={props.item.name} />
      </Link>
    </Paper>
  );
}

const LogosCarousel = (props) => {
  const images = [
    {name: "React", logo: react, url: "https://reactjs.org/"},
    {name: "Material UI", logo: materialUi, url: "https://material-ui.com/"},
    {name: "Node JS", logo: nodejs, url: "https://nodejs.org/en/"},
    {name: "Sequelize", logo: sequelize, url: "https://sequelize.org/"},
    {name: "PostgreSQL", logo: postgresql, url: "https://www.postgresql.org/"}
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      indicators={false}
      navButtonsAlwaysInvisible={true}
    >
      {
        images.map((item, i) => <CarouselItem key={i} item={item} /> )
      }
    </Carousel>
  );
};

export default LogosCarousel;
