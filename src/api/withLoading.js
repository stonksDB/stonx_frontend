import { Box, CircularProgress } from "@material-ui/core";

function withLoading(InnerComponent, LoadingComponent=null) {
  return function wihLoadingComponent({isLoading, ...props}) {
    if (!isLoading) {
      return <InnerComponent {...props} />;
    }
    else {
      const Lc = (LoadingComponent==null) ? () => {return <CircularProgress/>} : LoadingComponent;

      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Lc/>
        </Box>
      );
    }
  };
}
export default withLoading;