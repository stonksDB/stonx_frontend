import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import {
  // RadioGroup,
  Typography,
  useTheme,
  // ButtonGroup,
  // Button,
} from "@material-ui/core";

const colors = ["#2360FB", "#FAC032", "#6eff6e", "#d05dff"];

const MarketChart = (props) => {
  const theme = useTheme();
  const chartTheme = {
    textColor: theme.palette.text.primary,
    grid: {
      line: {
        strokeDasharray: "6 6",
      },
    },
    crosshair: {
      line: {
        stroke: "#7ba0fc",
      },
    },
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

  const getPlottableData = (tickers) => {
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

  let dataPoints = getPlottableData(props.chartData);
  let ticks = dataPoints[0] !== undefined && getTicks(dataPoints);


  return (
    <section style={{ height: props.height }}>
      {props.title !== null && props.title !== "" && (
        <Typography variant="h6" style={{ position: "absolute" }}>
          {props.title}
        </Typography>
      )}

      <ResponsiveLine
        data={dataPoints}
        margin={{
          top: 35,
          right: 20,
          bottom: 30,
          left: 30,
        }}
        theme={chartTheme}
        colors={(data) => {
          return data.color != null
            ? data.color
            : props.colorSchema == null
            ? theme.palette.primary.main
            : props.colorSchema;
        }}
        curve="cardinal"
        xScale={{ type: "point", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisBottom={
          props.enableAxisX
            ? {
                orient: "bottom",
                tickSize: 7,
                tickPadding: 5,
                legend: props.xTitle,
                legendOffset: 30,
                legendPosition: "middle",
                tickValues: ticks,
              }
            : null
        }
        axisLeft={
          props.enableAxisY
            ? {
                orient: "left",
                tickSize: 0,
                tickPadding: 10,
                legend: props.yTitle,
                legendOffset: 30,
                legendPosition: "middle",
              }
            : null
        }
        legends={
          props.enableLegend
            ? [
                {
                  anchor: "top-right",
                  direction: "row",
                  itemWidth: 80,
                  itemHeight: 0,
                  translateY: -18,
                  translateX: 18,
                  symbolSize: 12,
                  symbolShape: "circle",
                },
              ]
            : []
        }
        enableGridX={props.enableGridX}
        enableGridY={props.enableGridY}
        enableArea={props.enableArea}
        areaBlendMode="multiply"
        defs={[
          linearGradientDef("gradient", [
            { offset: 0, color: "inherit" },
            { offset: 100, color: "inherit", opacity: 0 },
          ]),
        ]}
        fill={[{ match: "*", id: "gradient" }]}
        enablePoints={props.enablePoints}
        pointBorderWidth={2}
        pointSize={5}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointColor="#ffffff"
        animate={true}
        motionConfig="default"
        isInteractive={true}
        enableSlices={"x"}
      />
    </section>
  );
};

MarketChart.defaultProps = {
  title: "",
  height: "26vh",
  colorSchema: null,
  enableArea: false,
  enablePoints: true,
  enableLegend: true,
  xTitle: "",
  yTitle: "",
  enableAxisX: true,
  enableAxisY: true,
  enableGridX: false,
  enableGridY: true,
};

export default MarketChart;
