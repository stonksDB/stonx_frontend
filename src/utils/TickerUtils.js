const mapHistory = (history) => {
  let mappedHistory = [];
  history.forEach((entry) => {
    mappedHistory.push({
      x: entry.datetime,
      y: entry.Close,
      top: entry.High,
      bottom: entry.Low,
    });
  });
  return mappedHistory;
};

const formatDate = (date) => {
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

const prettifyHistory = (points) => {
  let prettyHistory = [];
  points.forEach((point, index) => {
    let x = formatDate(point.x);
    prettyHistory.push({
      x: x,
      y: point.y,
    });
  });
  return prettyHistory;
};

const getPlottableData = (tickers, colors) => {
  let plottableData = [];
  tickers.forEach((ticker, index) => {
    plottableData.push({
      id: ticker.ticker,
      color: colors[index],
      data: prettifyHistory(ticker.points),
    });
  });
  return plottableData;
};

const getTicks = (dataPoints) => {
  let ticksArr = [];
  dataPoints[0].data.forEach((entry, index) => {
    if (index % 5 === 0) {
      ticksArr.push(entry.x);
    }
  });
  return ticksArr;
};

export { mapHistory, getPlottableData, getTicks };
