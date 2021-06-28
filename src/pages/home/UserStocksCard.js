import MarketChart from "../../components/charts/MarketChart";
import React, { useContext, useEffect, useState } from "react";
import { getHistory } from "../../api/API";
import withLoading from "../../api/withLoading";
import { UserStateContext } from "../../context/UserStateContext";
import { Typography } from "@material-ui/core";

const UserStocksCard = (props) => {
  const { userState } = useContext(UserStateContext);
  const [state, setState] = useState({
    isLoading: true,
    likedStocksData: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, likedStocksData: []});

    async function getData() {
      const likedTickers = userState.likes;
      const history = await Promise
        .allSettled(likedTickers.map((ticker) => Promise.resolve(getHistory(ticker))));

      return likedTickers.map((stock,index) => {
        const points = history[index].value;

        return {
          ticker: stock,
          points
        };
      });
    }

    getData().then((data) => {
      isActive && setState({ isLoading: false, likedStocksData: data });

      return () => {
        isActive = false;
      };
    });
  }, [setState, userState.likes]);

  const InnerComponent = withLoading((props) => (
    props.likedStocksData.length > 0 ? (
      <MarketChart
        title="My Stocks"
        height="30vh"
        enablePoints={false}
        points={props.likedStocksData}
      />
    ) : (
      <Typography align="center">You have no followed stocks!</Typography>
    )
  ));

  return <InnerComponent isLoading={state.isLoading} likedStocksData={state.likedStocksData}/>;
};

export default UserStocksCard;
