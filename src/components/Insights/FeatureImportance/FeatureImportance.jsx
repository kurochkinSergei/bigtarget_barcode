import React from "react";
import { data } from "../data";
import round from "utils/round";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { elPurple } from "constants/colors";

const getData = (datakey) => {
  const treatment = data[datakey];
  return treatment["adv_validation_fi"].features.map((feature, index) => {
    const importance = treatment["adv_validation_fi"].importances[index];

    return {
      name: feature,
      importance: round(importance, 3),
    };
  });
};

const FeatureImportance = ({ title, caption, description, datakey }) => {
  const d = getData(datakey);

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
          <YAxis dataKey="name" type="category" minTickGap={0} />
          <Tooltip />
          <Legend />
          <Bar dataKey="importance" barSize={20} fill={elPurple} />
        </ComposedChart>
      </div>
      <div className="caption">{caption}</div>
      <p className="description">{description()}</p>
    </div>
  );
};

export default FeatureImportance;
