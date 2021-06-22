import React, { useContext, useEffect, useState } from "react";
import FollowedTicker from "../components/FollowedTicker";
import { Grid } from "@material-ui/core";
import { UserStateContext } from "../context/UserStateContext";
import { getCompanyInfo } from "../api/API";
import withLoading from "../api/withLoading";

const LikedStocksList = (props) => {
  const {userState} = useContext(UserStateContext);
  const [state, setState] = useState({
    loading: true,
    tickerDetails: [],
  });

  useEffect(() => { //TODO: Investigate why this is not called on context change
    let isActive = true;

    Promise
      .all(userState.likes.map(item => getCompanyInfo(item)))
      .then((result) => isActive && setState({loading: false, tickerDetails: result}));

    return () => {
      isActive = false;
    };
  }, [userState]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        direction="row"
      >
        {props.tickerDetails.map((t) => (
          <Grid item sm={12} md={6} lg={4} key={t.ticker}>
            <FollowedTicker ticker={t} />
          </Grid>
        ))}
      </Grid>
    );
  });

  return (
    <InnerComponent isLoading={state.isLoading} tickerDetails={state.tickerDetails}/>
  );
};

export default LikedStocksList;
