import React, { useEffect, useState } from "react";
import withLoading from "../../api/withLoading";
import { Grid } from "@material-ui/core";
import SingleIndexContainer from "../../components/charts/SingleIndexContainer";
import { getIndexes } from "../../api/API";


const IndexesCard = (props) => {
  const [state, setState] = useState({
    isLoading: true,
    indexes: [],
  });

  useEffect(() => {
    let isActive = true;
    setState({ isLoading: true, indexes: []});

    getIndexes()
      .then((indexes) => isActive && setState({ isLoading: false, indexes: indexes }));

    return () => {
      isActive = false;
    };
  }, [setState]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid container direction="row" spacing={1} justify="space-between">
        {props.indexes.map((singleIndex) => (
          <Grid item xs key={singleIndex.ticker}>
            <SingleIndexContainer index={singleIndex} />
          </Grid>
        ))}
      </Grid>
    );
  });
  return <InnerComponent isLoading={state.isLoading} indexes={state.indexes} />;
};

export default IndexesCard;
