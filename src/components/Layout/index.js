import React from "react";
import Team from "components/Team/Team";
import Publications from "components/Publications/Publications";
import Insigths from "components/Insights/Insights";
import Scoring from "components/Scoring/Scoring";
import Azure from "components/Azure/Azure";

export const tabs = [
  {
    id: "team",
    label: "Команда",
  },
  {
    id: "experience",
    label: "Опыт",
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
  experience: <Publications />,
  insights: <Insigths />,
  scoring: <Scoring />,
  azure: <Azure />,
};
