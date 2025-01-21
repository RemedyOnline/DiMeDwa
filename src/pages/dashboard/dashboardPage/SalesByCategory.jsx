import React, { useEffect, useState } from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  // VictoryVoronoiContainer,
} from "victory";
import PropTypes from "prop-types";
// import _ from "lodash";

const categories = [
  {
    name: "Electronics",
    data: [
      4000, 5200, 4600, 4800, 4600, 6200, 5000, 6400, 5900, 7200, 7000, 7700,
    ],
  },
  {
    name: "Fashion",
    data: [
      3000, 3200, 3500, 3600, 3800, 4000, 4200, 3600, 5500, 4800, 5000, 5900,
    ],
  },
  {
    name: "Groceries",
    data: [
      2100, 1700, 2700, 3200, 3400, 4400, 3800, 4000, 4200, 3800, 4600, 4200,
    ],
  },
  {
    name: "Appliances",
    data: [
      4000, 3600, 4200, 4900, 5300, 5000, 5800, 5400, 4600, 5000, 5800, 5300,
    ],
  },
  {
    name: "Furniture",
    data: [
      1400, 2600, 2000, 2400, 2000, 2900, 3100, 2500, 2900, 2600, 3300, 3900,
    ],
  },
];

const symbols = [
  "circle",
  "square",
  "triangleUp",
  "plus",
  "star",
  "diamond",
  "triangleDown",
];

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore",
];

const SalesByCategory = () => {
  const [state, setState] = React.useState({
    interpolation: "natural",
  });

  const [animatedData, setAnimatedData] = useState(categories);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(() =>
        categories.map((category) => ({
          ...category,
          data: category.data.map(
            (d) => d + Math.floor(Math.random() * 100 - 50),
          ),
        })),
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const InterpolationSelect = ({ currentValue, values, onChange }) => (
    <select
      onChange={onChange}
      value={currentValue}
      className="mx-auto mt-3 block w-[200px] rounded-lg border border-gray-300 bg-bgColor p-1 text-sm"
    >
      {values.map((value) => (
        <option value={value} key={value}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </option>
      ))}
    </select>
  );

  InterpolationSelect.propTypes = {
    currentValue: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  return (
    <section className="bg-white">
      <InterpolationSelect
        currentValue={state.interpolation}
        values={cartesianInterpolations}
        onChange={(event) =>
          setState({
            interpolation: event.target.value,
          })
        }
      />
      <VictoryChart
        theme={VictoryTheme.clean}
        height={400}
        padding={{
          top: 50,
          left: 80,
          right: 20,
          bottom: 100,
        }}
        // containerComponent={
        //   <VictoryVoronoiContainer
        //     voronoiDimension="x"
        //     labels={({ datum }) => `${datum.x}: GHc ${datum.y}`}
        //     labelComponent={
        //       <VictoryLabel
        //         flyoutStyle={{ stroke: "#004739", fill: "white" }}
        //         style={{ fontSize: 10 }}
        //       />
        //     }
        //   />
        // }
      >
        <VictoryLabel
          text="Monthly Sales Trends By Categories"
          style={{
            ...VictoryTheme.clean.label,
            fontSize: 12,
          }}
          dx={12}
          dy={1}
        />
        <VictoryLabel
          text="Total sales (in revenue or units sold) per month for each product category (i.e., Electronics, Fashion, Groceries)."
          style={{
            ...VictoryTheme.clean.label,
            fontSize: 8,
          }}
          dx={12}
          dy={15}
        />
        <VictoryAxis
          // tickValues={Array.from({ length: 7 }, (_, i) => 2010 + i * 2)}
          //   tickValues={_.range(2010, 2024, 2)}
          tickValues={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ]}
          style={{
            axis: {
              stroke: "#004739",
            },
            tickLabels: {
              fontSize: 10,
              padding: 5,
            },
            ticks: {
              stroke: "#d9d9d9",
              size: 8,
            },
            grid: {
              stroke: "none",
              //  stroke: "transparent"
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          //   tickValues={Array.from({ length: 5 }, (_, i) => i * 40)}
          //   tickFormat={(value) => `${value} GW` }
          tickFormat={(value) => `GH₵ ${value}`}
          style={{
            axis: {
              stroke: "#004739",
            },
            axisLabel: {
              fontSize: 8,
              padding: 50,
            },
            ticks: {
              stroke: "#d9d9d9",
              size: 8,
            },
            tickLabels: {
              fontSize: 10,
            },
            grid: {
              stroke: "none",
              size: 5,
            },
          }}
        />
        {animatedData.map((category, i) => (
          <VictoryGroup
            data={category.data.map((d, index) => ({
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
              ][index],
              y: d,
            }))}
            key={category.name}
          >
            <VictoryLine
              style={{
                data: {
                  stroke: VictoryTheme.clean.palette.qualitative[i],
                  strokeWidth: 1,
                },
              }}
              animate={{ duration: 1000 }}
              interpolation={state.interpolation}
            />
            <VictoryScatter
              size={2}
              symbol={symbols[i]}
              animate={{ duration: 1000 }}
              style={{
                data: {
                  fill: VictoryTheme.clean.palette.qualitative[i],
                },
              }}
            />
          </VictoryGroup>
        ))}
        <VictoryLegend
          itemsPerRow={5}
          x={50}
          y={330}
          data={categories.map((s) => ({
            name: s.name,
            symbol: {
              fill: VictoryTheme.clean.palette.qualitative[
                categories.indexOf(s)
              ],
              type: symbols[categories.indexOf(s)],
            },
          }))}
          style={{
            data: {
              fill: ({ datum }) => datum.symbol.fill,
            },
            labels: {
              fontSize: 9,
            },
            border: {
              stroke: "transparent",
            },
          }}
        />
      </VictoryChart>
    </section>
  );
};

export default SalesByCategory;
