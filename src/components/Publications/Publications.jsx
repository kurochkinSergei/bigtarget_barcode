import React from "react";

import uplift1 from "assets/publications/uplift-1.jpeg";
import uplift2 from "assets/publications/uplift-pt-2.jpeg";
import sklift from "assets/publications/sklift-logo.png";
import github from "assets/publications/github.svg";

import Publication from "./Publication/Publication";

const Publications = () => {
  return (
    <>
      <div className="content-header">Наш опыт</div>

      <div className="publications">
        <Publication
          style={{
            top: 96,
            left: 126,
            width: 580,
          }}
          href="https://habr.com/ru/company/ru_mts/blog/485980/"
          source="Хабр"
          title="Туториал по Uplift моделированию. Часть 1"
          img={uplift1}
          text="Команда Big Data МТС активно извлекает знания из имеющихся
          данных и решает большое количество задач для бизнеса. Один из
          типов задач машинного обучения, с котор..."
        />

        <Publication
          style={{
            width: 380,
            top: 96 + 284 + 8,
            left: 126,
          }}
          isYellow
          href="https://habr.com/ru/company/ru_mts/blog/485976/"
          source="Хабр"
          title="Туториал по Uplift моделированию. Часть 2"
          img={uplift2}
          text="В первой части мы познакомились с uplift моделированием и узнали, что метод позволяет выбирать оптимальную стратегию коммуникации с клиентом, а также разобрали..."
        />

        <Publication
          style={{
            width: 286,
            top: 96,
            left: 126 + 8 + 580,
          }}
          href="https://habr.com/ru/company/ru_mts/blog/485976/"
          source="Docs"
          title="User guide for uplift modeling"
          img={sklift}
          text="Uplift modeling estimates the effect of communication action on some customer outcome and gives an opportunity to efficiently target..."
        />

        <Publication
          style={{
            width: 319,
            top: 96 + 284 + 8,
            left: 126 + 8 + 380,
          }}
          href="https://github.com/maks-sh/scikit-uplift"
          source="github"
          title="scikit-uplift"
          img={github}
          text="scikit-uplift is a Python module for classic approaches for uplift modeling built on top of scikit-learn. Uplift prediction aims..."
        />
      </div>
    </>
  );
};

export default Publications;
