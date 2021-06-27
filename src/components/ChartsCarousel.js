import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import MarketChart from "./MarketChart";
import { Box, Grid } from "@material-ui/core";
import { UserStateContext } from "../context/UserStateContext";
import withLoading from "../api/withLoading";
import { getCompanyInfo, getHistory } from "../api/API";

const ChartsCarousel = (props) => {
  const { userState } = useContext(UserStateContext);
  const mappedStocks = props.stocks.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  const [state, setState] = useState({
    isLoading: false,
    likedTickers: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, likedTickers: [] });

    if (userState.likes.length > 0) {
      let t = [];
      userState.likes.map((i) =>
        getCompanyInfo(i).then((c) =>
          getHistory(c).then((d) => {
            t.push({ points: d, ...c });
          })
        )
      );

      setState({
        isLoading: true,
        likedTickers: t,
      });

      console.log(state);

    } else {
      setState({ isLoading: false, likedTickers: [] });
      return () => {
        isActive = false;
      };
    }
  }, [userState]);

  const InnerComponent = withLoading((props) => {
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
          <Grid container key={stocksCouple.key}>
            {stocksCouple.map((stock) => (
              <Grid item sm={6} key={stock.key}>
                <Box>
                  <MarketChart
                    height="40vh"
                    points="first"
                    usePointsOf="first"
                    enableGridX
                    enableGridY
                    enableLegend={false}
                    chartData={state.likedTickers}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    );
  });
  return (
    <InnerComponent
      isLoading={state.isLoading}
      tickerDetails={state.likedTickers}
    />
  );
};

export default ChartsCarousel;
