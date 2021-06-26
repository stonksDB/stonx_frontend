import React, { useEffect, useState } from "react";
import withLoading from "../api/withLoading";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import IndexContainer from "../components/IndexContainer";
import { getIndexes } from "../api/API";
import { FormatLineSpacingRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: theme.card,
  })
);

const Indexes = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    isLoading: false,
    indexes: [],
  });

  useEffect(() => {
    let isActive = true;

    setState({ isLoading: true, indexes: [] });

    getIndexes().then((indexes) => {
      console.log(indexes);
      setState({ loading: true, indexes: indexes });
    });

    if (state.indexes.length > 0) {
      setState((state) => ({ loading: false, indexes: state.indexes }));
      return () => {
        isActive = false;
      };
    }

    // if (state.indexes.length > 0) {
    //   async function getData() {
    //     await Promise.allSettled(state.indexes).then(
    //       (result) =>
    //         isActive && setState({ isLoading: false, indexes: result })
    //     );
    //   }
    //   getData().then(() => {
    //     return () => {
    //       isActive = false;
    //     };
    //   });
    // }
  }, [getIndexes]);

  const InnerComponent = withLoading((props) => {
    return (
      <Grid container direction="row" spacing={1} justify="space-between">
        {state.indexes.forEach((singleIndex) => {
          <Grid item xs>
            {/* <IndexContainer indexData={singleIndex} /> */}
            <Typography>{singleIndex.ticker}</Typography>
          </Grid>;
        })}
      </Grid>
    );
  });
  return <InnerComponent isLoading={state.isLoading} />;
};

export default Indexes;
