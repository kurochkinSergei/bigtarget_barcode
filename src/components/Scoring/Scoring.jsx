import React, { useState } from "react";

import shapFeatures from "assets/shap_total.png";
import Table from "./Table/Table";
import { data } from "./data";

import "./Scoring.scss";
import { AdditiveForceVisualizer } from "components/Shap/index";
import round from "utils/round";
import get from "lodash/get";

const Scoring = () => {
  const [selectedRow, setSelectedRow] = useState({ ...data[0] });

  const shap = get(selectedRow, "shap", null);
  return (
    <>
      <div className="content-header">Скоринг</div>
      <div className="title">Данные</div>
      <div>Выберите строку в таблице</div>
      <Table selectedRow={selectedRow} setSelectedRow={setSelectedRow} />

      <div style={{ marginBottom: 50 }}>
        {selectedRow && (
          <>
            <div className="uplift">
              <div className="u">U</div>
              <div className="cardholder">{selectedRow.cardholder}</div>
              <div className="value">
                Uplift: {round(selectedRow.uplift, 6)}
              </div>
            </div>
          </>
        )}
        {shap && (
          <>
            <div className="title">Shap</div>
            <div>{"uplift = 2 * (output_value) - 1"}</div>

            <div
              style={{
                width: `calc(100% - 32px)`,
              }}
            >
              <AdditiveForceVisualizer
                baseValue={shap.baseValue}
                link="identity"
                featureNames={shap.featureNames}
                outNames={["output value"]}
                features={shap.features}
              />
            </div>
          </>
        )}

        <div className="title">Наиболее важные признаки</div>
        <img
          style={{
            width: 600,
            height: 480,
          }}
          src={shapFeatures}
          alt="Наиболее важные признаки"
        />
      </div>
    </>
  );
};

export default Scoring;
