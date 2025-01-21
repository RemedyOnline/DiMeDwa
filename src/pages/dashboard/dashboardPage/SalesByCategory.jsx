import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLabel, VictoryLegend, VictoryLine, VictoryScatter, VictoryTheme } from "victory";
// import _ from "lodash";

const categories = [
  {
    name: "Electronics",
    data: [4000, 5200, 4600, 4800, 4600, 6200, 5000, 6400, 6900, 7200, 7500, 8000],
  },
  {
    name: "Fashion",
    data: [3000, 3200, 3500, 3600, 3800, 4000, 4200, 3600, 5800, 4800, 5000, 5200],
  },
  {
    name: "Groceries",
    data: [1200, 2500, 3000, 3200, 3400, 4400, 3800, 4000, 4200, 4400, 4600, 4800],
  },
  {
    name: "Appliances",
    data: [4000, 4200, 4500, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200],
  },
  {
    name: "Furniture",
    data: [3500, 2600, 2000, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600],
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


const SalesbyCategory = () => {
   return (
      <section className="bg-white text-red-500">
         <h1>Hello</h1>
    <VictoryChart
      theme={VictoryTheme.clean}
      padding={{
         top: 50,
         left: 80,
         right: 20,
         bottom: 100,
      }}
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
                 tickValues={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]}

               style={{
           axis: {
            stroke: "#ff0000",
          },
          tickLabels: {
              fontSize: 10,
             padding: 5
          },
          ticks: {
            stroke: "#d9d9d9",
            size: 8,
           },
           grid: {
             stroke: "#d9d9d9"
            //  stroke: "transparent"
          }
        }}
      />
      <VictoryAxis
        dependentAxis
      //   tickValues={Array.from({ length: 5 }, (_, i) => i * 40)}
      //   tickFormat={(value) => `${value} GW` }
        tickFormat={(value) => `GH₵ ${value}` }
        style={{
          axis: {
            stroke: "#ff0000",
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
            stroke: "#d9d9d9",
            size: 5,
          },
        }}
      />
      {categories.map((category, i) => (
        <VictoryGroup
          data={category.data.map((d, index) => ({
            x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ][index],
            y: d,
          }))}
          key={category.name}
        >
          <VictoryLine
            style={{
              data: {
                stroke:
                  VictoryTheme.clean
                    .palette
                    .qualitative[i],
                strokeWidth: 1,
              },
            }}
          />
          <VictoryScatter
            size={2}
            symbol={symbols[i]}
            style={{
              data: {
                fill: VictoryTheme.clean
                  .palette.qualitative[
                  i
                ],
              },
            }}
          />
        </VictoryGroup>
      ))}
            <VictoryLegend
        itemsPerRow={5}
        x={50}
        y={220}
        data={categories.map((s) => ({
          name: s.name,
          symbol: {
            fill: VictoryTheme.clean
              .palette.qualitative[
              categories.indexOf(s)
            ],
            type: symbols[
              categories.indexOf(s)
            ],
          },
        }))}
        style={{
          data: {
            fill: ({ datum }) =>
              datum.symbol.fill,
          },
          labels: {
            fontSize: 8,
          },
          border: {
            stroke: "transparent",
          },
        }}
      />
         </VictoryChart>
         </section>
  );
}

export default SalesbyCategory