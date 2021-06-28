import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { Typography, useTheme } from "@material-ui/core";
import { getPlottableData, getTicks } from "../../utils/TickerUtils";

const colors = ["#2360FB", "#FAC032", "#6eff6e", "#d05dff"];  //TODO: Palette

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

  let dataPoints = getPlottableData(props.points, colors);
  let ticks = dataPoints[0] !== undefined && getTicks(dataPoints);  //TODO: Better ticks distance

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
  points: [[]],
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
  usePointsOf: "first",   //TODO
};

export default MarketChart;
