import React from "react";
import { data } from "../data";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const d = [
  {
    name: "Группа",
    control: Math.round(data["Grouped bar chart"].control / 1000),
    test: Math.round(data["Grouped bar chart"].test / 1000),
  },
];

const GroupBarChart = ({ title, caption, description }) => {
  return (
    <div className="graph">
      <div className="title">{title}</div>
      <div className="plot">
        <BarChart
          width={500}
          height={300}
          data={d}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="тыс." />
          <Tooltip />
          <Legend />
          <Bar dataKey="control" stackId="a" fill="#8884d8" />
          <Bar dataKey="test" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="caption">{caption}</div>
      <p className="description">{description()}</p>
    </div>
  );
};

export default GroupBarChart;
