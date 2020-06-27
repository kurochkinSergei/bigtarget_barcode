import GroupBarChart from "./GroupBarChart/GroupBarChart";
import BarChart from "./BarChart/BarChart";
import FeatureImportance from "./FeatureImportance/FeatureImportance";
import Roc from "./Roc/Roc";

export const graphs = [
  {
    id: "grouped-bar-chart",
    name: "grouped-bar-chart",
    pickTitle: ["group", "bar", "chart"],
    title: "График с барчартом",
    caption: "тут что то происходит",
    description: `Этот парень был из тех,
    Кто просто любит жизнь
    Любит праздники и громкий смех,
    Пыль дорог и ветра свист
    Он был везде и всегда своим,
    Влюблял в себя целый свет
    И гнал свой байк, а не лимузин
    Таких друзей больше нет`,
    component: GroupBarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "bar-chart",
    name: "bar-chart",
    pickTitle: ["bar", "chart"],
    title: "Столбики какие-то",
    caption: "непонятна",
    description: `Этот парень был из тех,
    Кто просто любит жизнь
    Любит праздники и громкий смех,
    Пыль дорог и ветра свист
    Он был везде и всегда своим,
    Влюблял в себя целый свет
    И гнал свой байк, а не лимузин
    Таких друзей больше нет`,
    component: BarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "roc",
    name: "roc",
    pickTitle: ["roc"],
    title: "ROC Это не зубная паста",
    caption: "",
    description: `Этот парень был из тех,
    Кто просто любит жизнь
    Любит праздники и громкий смех,
    Пыль дорог и ветра свист
    Он был везде и всегда своим,
    Влюблял в себя целый свет
    И гнал свой байк, а не лимузин
    Таких друзей больше нет`,
    component: Roc,
    fontSize: 48,
    lineHeight: "48px",
  },
  {
    id: "feature",
    name: "feature",
    pickTitle: ["feature", "importance"],
    title: "Тут что-то важное",
    caption: "",
    description: `Этот парень был из тех,
    Кто просто любит жизнь
    Любит праздники и громкий смех,
    Пыль дорог и ветра свист
    Он был везде и всегда своим,
    Влюблял в себя целый свет
    И гнал свой байк, а не лимузин
    Таких друзей больше нет`,
    component: FeatureImportance,
    fontSize: 22,
    lineHeight: "22px",
  },
];
