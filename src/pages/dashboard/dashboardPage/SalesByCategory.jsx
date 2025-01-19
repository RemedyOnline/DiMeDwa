/* App.js */
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SalesByCategory extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      title: {
        text: "Sales by Categories",
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}%",
          startAngle: -90,
          dataPoints: [
            { y: 50, label: "Groceries" },
            { y: 20, label: "Furniture" },
            { y: 30, label: "Electrical Appliances" },
            { y: 60, label: "Fashion" },
            { y: 15, label: "Electronics" },
          ],
        },
      ],
    };

    return (
      <div className="py-4 md:px-4 md:py-0">
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        <div className="bg-white lg:h-8"></div>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default SalesByCategory;
