import MarketChart from "../../components/charts/MarketChart";
import React, { useEffect, useState } from "react";
import { getHistory, getMostPerforming } from "../../api/API";
import withLoading from "../../api/withLoading";
import historyMock from "../../api/historyMock";

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
                            .allSettled(mostPerforming.map((ticker) => Promise.resolve(getHistory(ticker.ticker, "1d"))));

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
    <MarketChart
      title="Most Performing"
      height="38vh"
      enablePoints={false}
      points={props.mostPerformingData}
    />
  ));

  return <InnerComponent isLoading={state.isLoading} mostPerformingData={state.mostPerformingData}/>;
};

export default MostPerformingCard;
