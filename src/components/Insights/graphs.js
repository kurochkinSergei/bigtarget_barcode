import GroupBarChart from "./GroupBarChart/GroupBarChart";
import BarChart from "./BarChart/BarChart";
import FeatureImportance from "./FeatureImportance/FeatureImportance";
import Roc from "./Roc/Roc";
import HistogramCmp from "./Hisogram/Histogram";

export const graphs = [
  {
    id: "grouped-bar-chart",
    name: "grouped-bar-chart",
    pickTitle: ["train", "size"],
    title: "Количество наблюдений в обучающей выборке",
    description: `Контрольная и тестовая группы не сбалансированы. Соотношение контрольной группы к тестовой 1 к 3. Общее количество наблюдений: 687 тысяч.`,
    component: GroupBarChart,
    fontSize: 36,
    lineHeight: "28px",
  },
  {
    id: "bar-chart",
    name: "bar-chart",
    pickTitle: ["response", "rate"],
    title: "Разница в откликах",
    description: `При взаимодействии доля клиентов, совершивших целевое действие, составляет 11,01%. Без взаимодействия - 10,25%. Таким образом, эффект от рассылки (Uplift) увеличивает эту долю на 0,75%.`,
    component: BarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "check_count_uplift",
    name: "check_count_uplift ",
    pickTitle: ["one", "feature", "uplift"],
    title: "Гистограмма валидации на признаке cheque_count_12m_g48",
    caption: `
    Uplift@25% mean: 1.1317\n
    `,
    description: `Вместо предсказания модели мы использовали признак "Количество чеков,
    содержащих товар из группы g48 за 12 месяцев до рассылки".
    Качество метрики Uplift@25% статистически значимо отличается
    от случайного предсказания. На графике представлена
    гистограмма валидации на 100 разбиениях.
    Uplift@25% random: 0.7547
    Uplift@25% mean: 1.1317
    Uplift@25% std: 0.3339`,
    datakey: "check_count_uplift",
    component: HistogramCmp,
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
    datakey: "adv_treatment",
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "feature",
    name: "feature",
    pickTitle: ["test vs", "control", "feature", "importance"],
    title: "Adversarial Validation. Test vs Control",
    caption: "Наиболее важные признаки.",
    description: `Мы совершили подмену задачи и построили классификатор, отличающий контрольную группу от тестовой. Таким образом, мы хотели проверить случайное разбиение на адекватность. На данном графике представлены наиболее важные признаки, по которым модель пыталась отделить клиентов, с которыми взаимодействовали, от клиентов, с которыми не взаимодействовали.`,
    component: FeatureImportance,
    datakey: "adv_treatment",
    fontSize: 22,
    lineHeight: "22px",
  },
  {
    id: "sex_uplift",
    name: "sex_uplift ",
    pickTitle: ["sex", "uplift"],
    title: "Бутсрапированная выборка средних дельт uplift между М и Ж.",
    caption: "Различие в uplift между М и Ж не стат. значимо.",
    description: `Одна из интересных гипотез, которые мы рассмотрели заключалась в проверке того, что uplift среди мужчин 
    статистически значимо больше, чем среди женщин. На обучающей выборке uplift среди мужчин составлял 0.815%, а среди женщин
    меньше, 0.739%. Для того, чтобы проверить эту гипотезу мы ипользовали bootstrap.
    Полученная разница оказалась незначимой на уровне alpha=5%: p_value составило 0.683.`,
    datakey: "sex_uplift",
    component: HistogramCmp,
    fontSize: 36,
    lineHeight: "28px",
  },
  {
    id: "roc2",
    name: "roc2",
    pickTitle: ["train vs", "test", "roc"],
    title: "Adversarial Validation. Train vs Test",
    caption: "ROC AUC score: 0,5063",
    description: `Мы совершили подмену задачи и построили классификатор, отличающий обучающую выборку от тестовой. Таким образом, мы хотели проверить случайное разбиение на адекватность. Качество модели оказалось случайно, о чем свидетельствует ROC кривая.`,
    component: Roc,
    datakey: "adv_test",
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "feature2",
    name: "feature2 ",
    pickTitle: ["train vs", "test", "feature", "importance"],
    caption: "Наиболее важные признаки.",
    description: `Мы совершили подмену задачи и построили классификатор, отличающий обучающую выборку от тестовой. Таким образом, мы хотели проверить случайное разбиение на адекватность. На данном графике представлены наиболее важные признаки, по которым модель пыталась отделить клиентов из обучающей выборки, от клиентов из тестовой выборки.`,
    datakey: "adv_test",
    component: FeatureImportance,
    fontSize: 22,
    lineHeight: "22px",
  },
];
