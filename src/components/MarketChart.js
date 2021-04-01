import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { Typography, useTheme } from "@material-ui/core";

const data = {
  xTitle: "X Axis",
  yTitle: "Y Axis",
  points: [
    {
      id: "Stock A", data: [
        {x: 0, y: 7}, {x: 1, y: 5}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 13}, {x: 7, y: 16}, {x: 9, y: 12},
      ],
    }, {
      id: "Stock B", color: "#FAC032", data: [
        {x: 0, y: 12}, {x: 1, y: 23}, {x: 2, y: 5}, {x: 3, y: 9}, {x: 4, y: 14}, {x: 7, y: 2}, {x: 9, y: 6},
      ],
    }
  ]
};

const MarketChart = (props) => {
  const theme = useTheme();
  const dataPoints = props.usePointsOf==="both" ? data.points : props.usePointsOf==="first" ? [data.points[0]] : [data.points[1]];

  return (
    <section style={ {height: props.height} }>
      <Typography variant="h6" style={ {position: "absolute"} }>{ props.title }</Typography>
      <ResponsiveLine
        data={ dataPoints }
        margin={ {top: 35, right: 20, bottom: 30, left: 30} }
        theme={ theme }
        colors={ (data) => {
          return data.color!=null ? data.color :
            props.colorSchema==null ? theme.palette.primary.main : props.colorSchema;
          }
        }
        curve="cardinal"

        xScale={ {type: "point", min: "auto", max: "auto"} }
        yScale={ {type: "linear", min: "auto", max: "auto"} }  //TODO: sometimes points go outside boundaries

        axisBottom={ {
          orient: "bottom", tickSize: 7, tickPadding: 5, legend: props.xTitle, legendOffset: 30,
          legendPosition: "middle"
        } }
        axisLeft={ {
          orient: "left", tickSize: 0, tickPadding: 10, legend: props.yTitle, legendOffset: 30, legendPosition: "middle"
        } }

        legends={ props.enableLegend ? [
          {
            anchor: "top-right", direction: "row", itemWidth: 80, itemHeight: 0, translateY: -18, translateX: 18,
            symbolSize: 12, symbolShape: "circle"
          }
        ]
          : []
        }

        enableGridX={ props.enableGridX }
        enableGridY={ props.enableGridY }

        enableArea={ props.enableArea }
        areaBlendMode="multiply"
        defs={ [
          linearGradientDef("gradient", [
            {offset: 0, color: "inherit"}, {offset: 100, color: "inherit", opacity: 0}
          ]),
        ] }
        fill={ [{match: "*", id: "gradient"}] }

        enablePoints={ props.enablePoints }
        pointBorderWidth={ 2 }
        pointSize={5}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointColor="#ffffff"

        animate={ true }
        motionConfig="default"
        isInteractive={ true }
        enableSlices={ "x" }
      />
    </section>
  );
};

MarketChart.defaultProps = {
  title: "",
  height: "26vh",
  usePointsOf: "both",   //Can be first, second, both TODO: remove this when we'll have data from the APIs
  colorSchema: null,
  enableArea: false,
  enablePoints: true,
  enableLegend: true,
  xTitle: "",
  yTitle: "",
  enableGridX: false,
  enableGridY: true
};

export default MarketChart;