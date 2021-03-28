import { ResponsiveLineCanvas } from "@nivo/line";

const data = [
  {
    "id": "germany", "color": "hsl(296, 70%, 50%)", "data": [
      {
        "x": "plane", "y": 6
      }, {
        "x": "helicopter", "y": 136
      }, {
        "x": "boat", "y": 43
      }, {
        "x": "train", "y": 240
      }, {
        "x": "subway", "y": 39
      }, {
        "x": "bus", "y": 256
      }, {
        "x": "car", "y": 235
      }, {
        "x": "moto", "y": 295
      }, {
        "x": "bicycle", "y": 190
      }, {
        "x": "horse", "y": 297
      }, {
        "x": "skateboard", "y": 173
      }, {
        "x": "others", "y": 73
      }
    ]
  }, {
    "id": "norway", "color": "hsl(315, 70%, 50%)", "data": [
      {
        "x": "plane", "y": 184
      }, {
        "x": "helicopter", "y": 172
      }, {
        "x": "boat", "y": 9
      }, {
        "x": "train", "y": 36
      }, {
        "x": "subway", "y": 105
      }, {
        "x": "bus", "y": 209
      }, {
        "x": "car", "y": 221
      }, {
        "x": "moto", "y": 250
      }, {
        "x": "bicycle", "y": 212
      }, {
        "x": "horse", "y": 167
      }, {
        "x": "skateboard", "y": 189
      }, {
        "x": "others", "y": 14
      }
    ]
  }
];

const MarketChart = (props) => {
  const enablePoints = props.enablePoints != null;

  return (
    <ResponsiveLineCanvas
      data={ data }
      margin={ {top: 10, right: 20, bottom: 30, left: 30} }
      xScale={ {type: "point"} }
      yScale={ {type: "linear", min: "auto", max: "auto", stacked: true, reverse: false} }
      curve="cardinal"
      axisTop={ null }
      axisRight={ null }
      axisBottom={ {
        orient: "bottom", tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "", legendOffset: 0,
        legendPosition: "middle"
      } }
      axisLeft={ {
        orient: "left", tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "", legendOffset: 0,
        legendPosition: "middle"
      } }
      enableGridX={ false }
      colors={ {scheme: "paired"} }
      enablePoints={ enablePoints }
      enableMesh={ true }
      pointSize={ 10 }
      pointColor={ {from: "color", modifiers: []} }
      pointBorderWidth={ 2 }
      pointBorderColor={ {from: "color", modifiers: []} }
      pointLabelYOffset={ -12 }
      enableArea={ true }
      areaBlendMode="multiply"
      areaOpacity={ 0.2 }
      enableSlices="x"
      legends={ [] }
      motionConfig="default"
    />
  );
};
export default MarketChart;