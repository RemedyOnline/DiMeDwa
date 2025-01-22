import React, { useEffect, useState } from "react";
import {
  VictoryLabel,
  VictoryPie,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const marketingPerformance = [
  { x: "Email", y: 9 },
  { x: "Social Media Ads", y: 35 },
  { x: "Google Ads", y: 14 },
  { x: "Influencers", y: 26 },
  { x: "Website", y: 16 },
];

const getData = () => {
  const rand = () => Math.max(Math.floor(Math.random() * 10000), 1000);
  return [
    { x: "Email", y: rand() },
    { x: "Social Media Ads", y: rand() },
    { x: "Google Ads", y: rand() },
    { x: "Influencers", y: rand() },
    { x: "Website", y: rand() },
  ];
};

const Performance = () => {
  const [data, setData] = React.useState(getData());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [months.length]);

  React.useState(() => {
    const setStateInterval = window.setInterval(() => {
      setData(getData());
    }, 4000);

    return () => {
      window.clearInterval(setStateInterval);
    };
  }, []);

  return (
    <section className="relative bg-white">
      {/* <svg viewBox="0 0 300 300"> */}
      <VictoryPie
        //   startAngle={90}
        //   endAngle={-90}
        innerRadius={50}
        data={data}
        animate={{ duration: 1000 }}
        theme={VictoryTheme.clean}
        cornerRadius={8}
        padAngle={2}
        //  width={300}
        //  height={300}
        //   standalone={false}
        //   radius={({ datum }) => datum.y + 100}
      />
      {/* <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={200}
        y={200}
        text="Incoming Traffic"
      /> */}
      {/* </svg> */}
      <p className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-bgColor px-2 py-1 font-mono font-semibold md:text-xl">
        {months[currentMonthIndex]}
      </p>
    </section>
  );
};

export default Performance;
