import MarketChart from "../../components/charts/MarketChart";
import React, { useEffect, useState } from "react";
import { getHistory, getMostPerforming } from "../../api/API";
import withLoading from "../../api/withLoading";
import Carousel from "react-material-ui-carousel";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const MostPerformingCard = (props) => {
  const [state, setState] = useState({
    isLoading: true,
    mostPerformingData: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, mostPerformingData: [] });

    async function getData() {
      const mostPerforming = await getMostPerforming();
      const history = await Promise
                            .allSettled(mostPerforming.map((ticker) => Promise.resolve(getHistory(ticker.ticker))));

      return mostPerforming.map((stock,index) => {
        const points = history[index].value;
        return {
          ...stock, points
        };
      });
    }

    getData().then((data) => {
      isActive && setState({ isLoading: false, mostPerformingData: data });

      return () => {
        isActive = false;
      };
    });
  }, [setState]);

  const InnerComponent = withLoading((props) => (
    <Carousel
      autoPlay
      animation="slide"
      swipe={false}
      NextIcon={<ChevronRight />}
      PrevIcon={<ChevronLeft />}
    >
      {props.mostPerformingData.map((data, index) => (
        <MarketChart
          title="Most Performing"
          height="38vh"
          enablePoints={false}
          points={[data]}
        />
      ))}
    </Carousel>

  ));

  return <InnerComponent isLoading={state.isLoading} mostPerformingData={state.mostPerformingData}/>;
};

export default MostPerformingCard;
