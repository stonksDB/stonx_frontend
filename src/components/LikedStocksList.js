import React, { useContext, useEffect, useState } from "react";
import FollowedTicker from "../components/FollowedTicker";
import { Grid, Typography } from "@material-ui/core";
import { UserStateContext } from "../context/UserStateContext";
import { getCompanyInfo } from "../api/API";
import withLoading from "../api/withLoading";

const LikedStocksList = (props) => {
  const {userState} = useContext(UserStateContext);
  const [state, setState] = useState({
    isLoading: false,
    tickerDetails: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({isLoading: true, tickerDetails: []});

    if (userState.likes.length > 0) {
      async function getData() {
        await Promise
          .allSettled(userState.likes.map(item => getCompanyInfo(item)))
          .then((result) => isActive && setState({isLoading: false, tickerDetails: result.map((pro) => pro.value)}));
      }

      getData().then(() => {
        return () => {
          isActive = false;
        };
      });
      
    } else {
      setState({isLoading: false, tickerDetails: []});
      return () => {
        isActive = false;
      };
    }

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
        {props.tickerDetails.length>0 ? (
          props.tickerDetails.map((t) => (
            <Grid item sm={12} md={6} lg={4} key={t.ticker}>
              <FollowedTicker ticker={t} />
            </Grid>
          )))
          : (
            <Grid container direction="column" alignItems="center" style={{padding: 175}}>
              <Grid item><Typography variant="h5">You have no followed stocks :(</Typography></Grid>
              <Grid item><Typography>Looking for some? Use the search bar, or explore the News!</Typography></Grid>
            </Grid>

          )}
      </Grid>
    );
  });

  return (
    <InnerComponent isLoading={state.isLoading} tickerDetails={state.tickerDetails}/>
  );
};

export default LikedStocksList;
