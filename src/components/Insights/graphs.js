import GroupBarChart from "./GroupBarChart/GroupBarChart";
import BarChart from "./BarChart/BarChart";
import FeatureImportance from "./FeatureImportance/FeatureImportance";
import Roc from "./Roc/Roc";

export const graphs = [
  {
    id: "grouped-bar-chart",
    name: "grouped-bar-chart",
    pickTitle: ["train", "size"],
    title: "Количество наблюдений в обучающей выборке",
    description: `Контрольная и тестовая группы не сбалансированы. Соотношение контрольной группы к тестовой 1 к 3. Общее количество наблюдений: 687 тысяч.`,
    component: GroupBarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "bar-chart",
    name: "bar-chart",
    pickTitle: ["response", "rate"],
    title: "Доля откликов",
    description: `При взаимодействии доля клиентов, совершивших целевое действие, составляет 11,01%. Без взаимодействия - 10,25%. Таким образом, эффект от рассылки (Uplift) увеличивает эту долю на 0,75%.`,
    component: BarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "roc",
    name: "roc",
    pickTitle: ["test vs", "control", "roc"],
    title: "Adversarial Validation. Test vs Control",
    caption: "ROC AUC score: 0,5535",
    description: `Мы совершили подмену задачи и построили классификатор, отличающий контрольную группу от тестовой. Таким образом, мы хотели проверить случайное разбиение на адекватность. Качество модели оказалось близко к случайному, о чем свидетельствует ROC кривая.`,
    component: Roc,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "feature",
    name: "feature",
    pickTitle: ["test vs", "control", "feature", "importance"],
    title: "Adversarial Validation. Test vs Control",
    caption: "Важность признаков.",
    description: `Мы совершили подмену задачи и построили классификатор, отличающий контрольную группу от тестовой. Таким образом, мы хотели проверить случайное разбиение на адекватность. На данном графике представлены наиболее важные признаки, по которым модель пыталась отделить клиентов, с которыми взаимодействовали, от клиентов, с которыми не взаимодействовали.`,
    component: FeatureImportance,
    fontSize: 22,
    lineHeight: "22px",
  },
];
