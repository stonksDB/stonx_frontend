import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { getPlottableData } from "../../utils/TickerUtils";

const colors = ["#2360FB", "#FAC032", "#8dfb23", "#a123fb", "#af8518", "#FB2360"];

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
    tooltip: {
      container: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
    },
  };

  const dataPoints = getPlottableData(props.points, colors);
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    props.points.length===0 ? (
      <Typography>
        Nothing to show here!
      </Typography>
    ) : (
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
              : theme.palette.primary.main;
          }}
          curve="cardinal"
          xScale={{
            type: "time",
            format: "%Y-%m-%eT%H:%M:%S",
            useUTC: false,
            precision: "minute",
            min: "auto",
            max: "auto"
          }}
          xFormat="time:%Y-%m-%eT%H:%M:%S-%L"
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          axisBottom={
            props.enableAxisX
              ? {
                format: "%e/%m %H:%M",
                tickValues: `every ${isMobile ? "30" : "60"} minutes`,  //Depends on getHistory period
              }:
              null
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
          areaBaselineValue={555}
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
    ));
};

MarketChart.defaultProps = {
  title: "",
  points: [[]],
  height: "26vh",
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
