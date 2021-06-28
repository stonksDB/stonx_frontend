const getPlottableData = (tickers, colors) => {
  if (tickers.length===1) {
    return [{
      id: tickers[0].ticker,
      color: colors[0],
      data: prettifyHistory(tickers[0].points),
    }]
  } else {
    return tickers.map((ticker, index) => ({
      id: ticker.ticker,
      color: colors[index],
      data: calculateStandardizedValues(prettifyHistory(ticker.points)),
    }));
  }
};

const prettifyHistory = (history) => {
  return history.map((point) => ({
    x: point.datetime.substring(0, point.datetime.length-6),
    y: point.Close,
  }));
};

const getStandardDeviation = (mean, array) => {
  const n = array.length
  return Math.sqrt(array.map(x =>
    Math.pow(x - mean, 2))
        .reduce((a, b) => a + b)
    / n)
};

const calculateStandardizedValues = (points) => {
  const variationData = [0];

  for(let i=1; i<points.length; i++)
    variationData.push((points[i].y - points[i-1].y) / points[i-1].y);

  const minValue = Math.min(...variationData);
  const maxValue = Math.max(...variationData);
  const avgValue = variationData.reduce((a, b) => a + b) / variationData.length;
  const stdPopulation = getStandardDeviation(avgValue, variationData);
  //console.log(minValue, maxValue, avgValue, stdPopulation);

  for(let i=0; i<points.length; i++) {
    //const normalizedValue = (variationData[i]-minValue)/(maxMinDifference);
    const standardizedValue = (variationData[i]-avgValue)/stdPopulation;
    points[i].y = standardizedValue.toFixed(2);
  }
  points.shift();

  return points;
};

export { getPlottableData };
