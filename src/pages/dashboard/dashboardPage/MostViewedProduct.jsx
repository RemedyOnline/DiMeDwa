/* App.js */
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

// Update these lines
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MostViewedProduct extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "dark",
      title: {
        text: "Most View Products",
      },
      axisX: {
        title: "Stock Items",
        reversed: true,
      },
      axisY: {
        title: "No. of views so far",
        includeZero: true,
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 22000, label: "iPhone 14 Pro Max" },
            { y: 18000, label: "PS4 Slim" },
            { y: 12445, label: "Airforce 1" },
            { y: 9630, label: "Kivo Gari" },
            { y: 7760, label: "Airpods Pro 2" },
            { y: 7360, label: "Chicken Bucket" },
            { y: 3300, label: "L-shaped Sofa" },
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
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0,
    );
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
}
export default MostViewedProduct;
