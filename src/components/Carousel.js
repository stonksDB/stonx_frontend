import {
  Link, Paper,
} from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@material-ui/core/styles";
import ImageWithFallback from "../utils/ImageWithFallback";

const CarouselItem = (props) => {
  const theme = useTheme();

  return (
    <Paper elevation={0} style={{backgroundColor: theme.palette.background.default, textAlign: "center"}}>
      <Link href={props.item.url} title={props.item.name} target="_blank">
        <ImageWithFallback style={{width: "70%", backgroundColor: "transparent"}} src={props.item.logo} alt={props.item.name} />
      </Link>
    </Paper>
  );
}

const LogosCarousel = (props) => {
  const images = [
    {name: "React", logo: `assets/technologies/React`, url: "https://reactjs.org/"},
    {name: "Material UI", logo: "assets/technologies/MaterialUi", url: "https://material-ui.com/"},
    {name: "Node JS", logo: "assets/technologies/Node", url: "https://nodejs.org/en/"},
    {name: "Sequelize", logo: "assets/technologies/Sequelize", url: "https://sequelize.org/"},
    {name: "PostgreSQL", logo: "assets/technologies/Postgresql", url: "https://www.postgresql.org/"}
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
