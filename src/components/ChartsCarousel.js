import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import Carousel from "react-material-ui-carousel";
import MarketChart from "./MarketChart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    
  })
);

const ChartsCarousel = (props) => {
  const classes = useStyles();
  
  const mappedStocks = props.stocks.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  // TODO: find a way to make ChartsCarousel responsive

  return (
    <Carousel
      autoPlay
      animation="slide"
      swipe={false}
      NextIcon={<ChevronRight />}
      PrevIcon={<ChevronLeft />}
    >
      {mappedStocks.map((stocksCouple) => (
        <Grid container>
          {stocksCouple.map((stock) => (
            <Grid item sm={6}>
              <Box>
                <MarketChart
                  height="40vh"
                  points="first"
                  usePointsOf="first"
                  enableGridX
                  enableGridY
                  enableLegend={false}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default ChartsCarousel;
