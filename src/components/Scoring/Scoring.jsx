import React, { useState } from "react";
import Table from "./Table/Table";
import "./Scoring.scss";
import { AdditiveForceVisualizer } from "components/Shap/index";
import { findByLabelText } from "@testing-library/react";

const Scoring = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      <div className="content-header">Скоринг</div>
      <Table selectedRow={selectedRow} setSelectedRow={setSelectedRow} />

      <div style={{ marginBottom: 50, display: "flex" }}>
        {selectedRow && (
          <AdditiveForceVisualizer
            baseValue={0.0}
            link="identity"
            featureNames={{
              "0": "Blue",
              "1": "Red",
              "2": "Green",
              "3": "Orange",
              "4": "Brown",
              "5": "Black",
              "6": "Gray",
              "7": "Purple",
            }}
            outNames={["output value"]}
            features={{
              "0": { value: 1.0, effect: 1.0 },
              "1": { value: 0.0, effect: 0.01 },
              "2": { value: 2.0, effect: -2.5 },
              "3": { value: 4.0, effect: -0.5 },
              "4": { value: 3.0, effect: 1.1 },
              "5": { value: 1.0, effect: -0.6 },
              "6": { value: 2.0, effect: -0.7 },
              "7": { value: 3.0, effect: -0.8 },
            }}
          />
        )}

        {selectedRow && (
          <div className="uplift">
            <div className="u">U</div>
            <div className="cardholder">{selectedRow.cardholder}</div>
            <div className="value">Uplift: {selectedRow.uplift}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Scoring;
