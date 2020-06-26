import React from "react";
import { AdditiveForceVisualizer } from "components/Shap/index";

const Scoring = () => {
  return (
    <>
      <div className="content-header">Скоринг</div>
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
    </>
  );
};

export default Scoring;
