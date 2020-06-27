import React from "react";
import { data } from "../data";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const getData = () => {
  const treatment = data["adv_treatment"];
  return treatment["adv_validation_fi"].features.map((feature, index) => ({
    name: feature,
    importance: treatment["adv_validation_fi"].importances[index],
  }));
};

const d = getData();

// const d = [
//   {
//     name: "axis",
//     ...data["Bar chart"],
//   },
// ];

const FeatureImportance = ({ title, caption, description }) => {
  return (
    <div className="graph">
      <div className="title">{title}</div>
      <div className="plot">
        <ComposedChart
          layout="vertical"
          width={600}
          height={400}
          data={d}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 150,
          }}
          padding={{
            left: 50,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="importance" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>
      <div className="caption">{caption}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default FeatureImportance;
