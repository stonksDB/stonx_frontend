const getPlottableData = (tickers, colors) => {
  return tickers.map((ticker, index)  => ({
    id: ticker.ticker,
    color: colors[index],
    data: prettifyHistory(ticker.points),
  }));
};

const prettifyHistory = (history) => {
  return history.map((point) => ({
    x: prettifyDate(point.datetime),
    y: point.Close.toFixed(2),
  }));
};

const prettifyDate = (date) => {  //TODO: Not responsive
  let dateObject = new Date(date);
  return (
    dateObject.getDate() +
    "/" +
    dateObject.getMonth() +
    " " +
    dateObject.getHours() +
    ":" +
    dateObject.getMinutes()
  );
};

const getTicks = (dataPoints) => {
  return dataPoints[0].data
    .filter((_,index) => index % 5 === 0)
    .map((entry) => entry.x );
};

export { getPlottableData, getTicks };
