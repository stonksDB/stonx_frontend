import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import MarketChart from "./MarketChart";
import { Box, Typography } from "@material-ui/core";
import { UserStateContext } from "../../context/UserStateContext";
import withLoading from "../../api/withLoading";
import { getHistory } from "../../api/API";

const LikedStocksCarousel = (props) => {
  const { userState } = useContext(UserStateContext);
  const [state, setState] = useState({
    isLoading: true,
    likedTickerPoints: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, likedTickerPoints: [] });

    async function getData() {
      const likedTickers = userState.likes;
      const history = await Promise
        .allSettled(likedTickers.map((ticker) => Promise.resolve(getHistory(ticker))));

      return likedTickers.map((stock,index) => {
        const points = history[index].value;
        return {
          points: points, ticker: stock
        };
      });
    }

    getData().then((data) => {
      isActive && setState({ isLoading: false, likedTickerPoints: data });

      return () => {
        isActive = false;
      };
    });
  }, [userState, setState]);

  const InnerComponent = withLoading((props) => {
    return (
      props.likedTickerPoints.length > 0 ? (
        <Carousel
          autoPlay
          animation="slide"
          swipe={false}
          NextIcon={<ChevronRight />}
          PrevIcon={<ChevronLeft />}
        >
          {props.likedTickerPoints.map((element, index) => (
            <Box key={element.ticker}>
              <MarketChart
                title={element.ticker}
                height="40vh"
                enableGridY
                enableLegend={false}
                points={[props.likedTickerPoints[index]]}
                colorIndex={index}
              />
            </Box>
          ))}
        </Carousel>
      ) : (
        <Typography align="center">You have no followed stocks!</Typography>
      )
    )});

  return (
    <InnerComponent isLoading={state.isLoading} likedTickerPoints={state.likedTickerPoints}/>
  );
};

export default LikedStocksCarousel;
