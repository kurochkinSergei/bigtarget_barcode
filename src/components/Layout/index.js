import React from "react";
import Team from "components/Team/Team";
import Insigths from "components/Insights/Insights";
import Scoring from "components/Scoring/Scoring";
import Azure from "components/Azure/Azure";

export const tabs = [
  {
    id: "team",
    label: "Команда",
  },
  {
    id: "insights",
    label: "Инсайты",
  },
  {
    id: "scoring",
    label: "Скоринг",
  },
  {
    id: "azure",
    label: "Azure ML",
  },
];

export const tabContent = {
  team: <Team />,
  insights: <Insigths />,
  scoring: <Scoring />,
  azure: <Azure />,
};
