import maxImg from "assets/team_pics/maksim_bw.jpg";
import irinaImg from "assets/team_pics/irina_bw.jpg";
import sergeiImg from "assets/team_pics/sergei_bw.jpeg";
import kirillImg from "assets/team_pics/kirill_bw.jpg";

export const roles = {
  ds: "Data Science",
  dev: "Разработка",
  pitch: "Питч",
  presentation: "Презентация",
  management: "Управление командой",
};

export const members = [
  {
    id: "maks",
    img: maxImg,
    name: "Максим Шевченко",
    roles: ["ds", "pitch", "presentation"],
    gihub: "",
    description: "",
  },
  {
    id: "irina",
    img: irinaImg,
    name: "Ирина Елисова",
    roles: ["ds", "presentation", "management"],
    gihub: "",
    description: "",
  },
  {
    id: "sergei",
    img: sergeiImg,
    name: "Сергей Курочкин",
    roles: ["dev"],
    gihub: "",
    description: "",
  },
  {
    id: "sergei",
    img: kirillImg,
    name: "Кирилл Ликсаков",
    roles: ["ds"],
    gihub: "",
    description: "",
  },
];
