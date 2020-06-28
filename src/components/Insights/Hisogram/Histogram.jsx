import React from "react";

import {
  Histogram,
  DensitySeries,
  BarSeries,
  XAxis,
  YAxis,
} from "@data-ui/histogram";

import { data } from "../data";
const rawData = Array(100).fill().map(Math.random);

const getData = (datakey) => {
  const d = data[datakey].distr;

  return d;
};

const HistogramCmp = ({ title, caption, description, datakey }) => {
  const d = getData(datakey);

  return (
    <div className="graph">
      <div className="title">{title}</div>
      <div className="plot">
        <Histogram
          width={500}
          height={350}
          ariaLabel="My histogram of ..."
          orientation="vertical"
          cumulative={false}
          normalized={false}
          binCount={25}
          valueAccessor={(datum) => datum}
          binType="numeric"
          renderTooltip={({ event, datum, data, color }) => (
            <div>
              <strong style={{ color }}>
                {datum.bin0} to {datum.bin1}
              </strong>
              <div>
                <strong>count </strong>
                {datum.count}
              </div>
              <div>
                <strong>cumulative </strong>
                {datum.cumulative}
              </div>
              <div>
                <strong>density </strong>
                {datum.density}
              </div>
            </div>
          )}
        >
          <BarSeries animated rawData={d /* or binnedData={...} */} />
          <XAxis />
          <YAxis />
        </Histogram>
      </div>

      <div className="caption">{caption}</div>
      <pre>
        <p className="description">{description}</p>
      </pre>
    </div>
  );
};

export default HistogramCmp;
