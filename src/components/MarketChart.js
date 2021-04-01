import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { Typography } from "@material-ui/core";

const data = {
  xTitle: "X Axis",
  yTitle: "Y Axis",
  points: [
    {
      id: "Stock A", data: [
        {x: 0, y: 7}, {x: 1, y: 5}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 13}, {x: 7, y: 16}, {x: 9, y: 12},
      ],
    }, {
      id: "Stock B", data: [
        {x: 0, y: 12}, {x: 1, y: 23}, {x: 2, y: 5}, {x: 3, y: 9}, {x: 4, y: 14}, {x: 7, y: 2}, {x: 9, y: 6},
      ],
    }
  ]
};

const MarketChart = (props) => {
  return (
    <section style={ {height: props.height} }>
      <Typography variant="h6" style={ {position: "absolute"} }>{ props.title }</Typography>
      <ResponsiveLine
        data={ data.points }
        margin={ {top: 35, right: 20, bottom: 30, left: 30} }
        colors={ {scheme: "paired"} }
        curve="cardinal"

        xScale={ {type: "point", min: "auto", max: "auto"} }
        yScale={ {type: "linear", min: "0", max: "25"} }

        axisBottom={ {
          orient: "bottom", tickSize: 5, tickPadding: 5, legend: props.xTitle, legendOffset: 30, legendPosition: "middle"
        } }
        axisLeft={ {
          orient: "left", tickSize: 5, tickPadding: 5, legend: props.yTitle, legendOffset: 30, legendPosition: "middle"
        } }

        legends={ [
          props.enableLegend ? {
            anchor: "top-right", direction: "row", itemWidth: 80, itemHeight: 0, translateY: -18, translateX: 18,
            symbolSize: 12, symbolShape: "circle"
          } : ""
        ] }

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
        pointBorderColor={ {from: "color", modifiers: []} }

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
  size: "mid",  //Can be small, mid, big
  height: "20vh",
  enableArea: false,
  enablePoints: true,
  enableLegend: true,
  xTitle: "",
  yTitle: "",
  enableGridX: false,
  enableGridY: true
};

export default MarketChart;