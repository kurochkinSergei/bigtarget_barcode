import React from "react";

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
    title: "Количество наблюдений по группам в обучающей выборке",
    description: () => (
      <div>
        Контрольная и тестовая группы не сбалансированы. Соотношение контрольной
        группы к тестовой <b>1 к 3</b>. Общее количество наблюдений: 687 тысяч.
      </div>
    ),
    component: GroupBarChart,
    fontSize: 36,
    lineHeight: "28px",
  },
  {
    id: "bar-chart",
    name: "bar-chart",
    pickTitle: ["response", "rate"],
    title: "Разница в откликах",
    description: () => (
      <div>
        При взаимодействии доля клиентов, совершивших целевое действие,
        составляет 11,01%. Без взаимодействия - 10,25%. Таким образом, эффект от
        рассылки (Uplift) увеличивает эту долю <b>на 0,75%</b>.
      </div>
    ),
    component: BarChart,
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "check_count_uplift",
    name: "check_count_uplift ",
    pickTitle: ["one", "feature", "uplift"],
    title: "Гистограмма валидации на признаке cheque_count_12m_g48",
    caption: "Uplift@25% mean: 1.1317",
    description: () => (
      <div>
        Вместо предсказания модели мы использовали признак "Количество чеков,
        содержащих товар из группы g48 за 12 месяцев до рассылки". Качество
        метрики Uplift@25% статистически <b>значимо отличается</b> от случайного
        предсказания. На графике представлена гистограмма валидации на 100
        разбиениях.<br></br>
        <br></br>
        Uplift@25% random: 0.7547<br></br>
        Uplift@25% mean: 1.1317<br></br>
        Uplift@25% std: 0.3339
      </div>
    ),
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
    description: () => (
      <div>
        Мы совершили подмену задачи и построили классификатор, отличающий
        контрольную группу от тестовой. Это позволяет проверить, что тестовая и
        контрольные группы сформированы случайным образом. Качество такой модели
        оказалось <b>близко к случайному</b> (о чем свидетельствует ROC кривая).
        Это значит, что группы почти не отличаются.
      </div>
    ),
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
    description: () => (
      <div>
        Мы совершили подмену задачи и построили классификатор, отличающий
        контрольную группу от тестовой. Таким образом, мы хотели проверить
        случайное разбиение на адекватность. На данном графике представлены
        наиболее важные признаки, по которым модель пыталась отделить клиентов,
        с которыми взаимодействовали, от клиентов, с которыми не
        взаимодействовали.
      </div>
    ),
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
    description: () => (
      <div>
        Одна из интересных гипотез, которые мы рассмотрели заключалась в
        проверке того, что uplift среди мужчин статистически значимо больше, чем
        среди женщин.<br></br> На обучающей выборке uplift среди мужчин
        составлял <b>0.815%</b>, а среди женщин меньше, <b>0.739%</b>. Для того,
        чтобы проверить эту гипотезу мы ипользовали bootstrap. <br></br>
        Полученная разница оказалась незначимой на уровне alpha=5%: p_value
        составило <b>0.683</b>.
      </div>
    ),
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
    description: () => (
      <div>
        Мы совершили подмену задачи и построили классификатор, отличающий
        обучающую выборку от тестовой. Таким образом, мы хотели проверить
        случайное разбиение на адекватность. Качество модели оказалось{" "}
        <b>случайно</b>, о чем свидетельствует ROC кривая.
      </div>
    ),
    component: Roc,
    datakey: "adv_test",
    fontSize: 28,
    lineHeight: "24px",
  },
  {
    id: "feature2",
    name: "feature2 ",
    title: "Adversarial Validation. Train vs Test",
    pickTitle: ["train vs", "test", "feature", "importance"],
    caption: "Наиболее важные признаки.",
    description: () => (
      <div>
        Мы совершили подмену задачи и построили классификатор, отличающий
        обучающую выборку от тестовой. Таким образом, мы хотели проверить
        случайное разбиение на адекватность. На данном графике представлены
        наиболее важные признаки, по которым модель пыталась отделить клиентов
        из обучающей выборки, от клиентов из тестовой выборки.
      </div>
    ),
    datakey: "adv_test",
    component: FeatureImportance,
    fontSize: 22,
    lineHeight: "22px",
  },
];
