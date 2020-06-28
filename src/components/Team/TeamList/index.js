import maxImg from "assets/team_pics/maksim_bw.jpg";
import irinaImg from "assets/team_pics/irina_bw.jpg";
import sergeiImg from "assets/team_pics/sergei_bw.jpeg";
import kirillImg from "assets/team_pics/kirill_bw.jpg";

export const roles = {
  ds: "Data Science",
  dev: "Разработка",
  pitch: "Питч",
  fe: "Frontend",
  rs: "Research",
  ml: "ML",
  geo: "Geo",
  bank: "Bank Scoring",
  math: "Math",
  recsys: "RecSys",
  presentation: "Презентация",
  management: "Управление командой",
  vis: "Data Visualization",
  react: "React",
};

export const members = [
  {
    id: "maks",
    img: maxImg,
    name: "Максим Шевченко",
    roles: ["ds", "pitch", "presentation", "ml", "geo", "dev"],
    github: "https://github.com/maks-sh",
    linkedin: "https://www.linkedin.com/in/maks-sh/",
    description: `Power Uplift'ер. Соавтор цикла статей на хабре «Туториал по Uplift моделированию». Разработчик библиотеки scikit-uplift для моделирования Uplift.`,
  },
  {
    id: "irina",
    img: irinaImg,
    name: "Ирина Елисова",
    roles: ["ds", "presentation", "management", "recsys", "dev", "ml"],
    github: "https://github.com/ElisovaIra",
    linkedin: "https://www.linkedin.com/in/irina-elisova-23b4b4bb/",
    description:
      "Стартапер. Соавтор цикла статей на хабре «Туториал по Uplift моделированию». Разработчик библиотеки scikit-uplift для моделирования Uplift.",
  },
  {
    id: "sergei",
    img: sergeiImg,
    name: "Сергей Курочкин",
    roles: ["dev", "fe", "vis", "react"],
    github: "https://github.com/kurochkinSergei",
    description:
      "Javascript разработчик. Ниндзя React приложений с опытом разработки коммерческих решений в сфере bigdata.",
  },
  {
    id: "kirill",
    img: kirillImg,
    name: "Кирилл Ликсаков",
    linkedin: "https://www.linkedin.com/in/kirill-liksakov-19769a107/",
    roles: ["ds", "rs", "ml", "bank", "math"],
    github: "https://github.com/kirrlix1994",
    description:
      "Математик. Танцор. Призер соревнования по Uplift моделированию от Х5. Разработчик библиотеки scikit-uplift для моделирования Uplift.",
  },
];
