/* App.js */
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MonthlySales extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Monthly Sales Thrend",
      },
      axisY: {
        title: "Number of sales made",
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "spline",
          name: "2023",
          showInLegend: true,
          dataPoints: [
            { y: 196, label: "Jan" },
            { y: 240, label: "Feb" },
            { y: 222, label: "Mar" },
            { y: 238, label: "Apr" },
            { y: 252, label: "May" },
            { y: 242, label: "Jun" },
            { y: 254, label: "Jul" },
            { y: 285, label: "Aug" },
            { y: 263, label: "Sept" },
            { y: 288, label: "Oct" },
            { y: 304, label: "Nov" },
            { y: 290, label: "Dec" },
          ],
        },
        {
          type: "spline",
          name: "2024",
          showInLegend: true,
          dataPoints: [
            { y: 270, label: "Jan" },
            { y: 226, label: "Feb" },
            { y: 242, label: "Mar" },
            { y: 258, label: "Apr" },
            { y: 272, label: "May" },
            { y: 272, label: "Jun" },
            { y: 294, label: "Jul" },
            { y: 305, label: "Aug" },
            { y: 323, label: "Sept" },
            { y: 348, label: "Oct" },
            { y: 334, label: "Nov" },
            { y: 350, label: "Dec" },
          ],
        },
      ],
    };

    return (
      <div className="md:py-4">
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default MonthlySales;
