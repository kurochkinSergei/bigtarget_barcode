import React from "react";

import uplift1 from "assets/publications/uplift-1.jpeg";
import uplift2 from "assets/publications/uplift-pt-2.jpeg";
import sklift from "assets/publications/sklift-logo.png";
import github from "assets/publications/github.svg";
import retailhero from "assets/publications/retail-hero.png";

import Publication from "./Publication/Publication";

const Publications = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div className="content-header">Uplift экспертиза</div>

      <div className="publications">
        <Publication
          style={{
            top: 96,
            left: 126,
            width: 580,
            height: 284,
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
            height: 318,
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
            height: 284,
            top: 96,
            left: 126 + 8 + 580,
          }}
          href="https://scikit-uplift.readthedocs.io/en/latest/user_guide/index.html"
          source="Docs"
          title="User guide for uplift modeling"
          img={sklift}
          text="Uplift modeling estimates the effect of communication action on some customer outcome and gives an opportunity to efficiently target..."
        />

        <Publication
          style={{
            width: 319,
            height: 318,
            top: 96 + 284 + 8,
            left: 126 + 8 + 380,
          }}
          href="https://github.com/maks-sh/scikit-uplift"
          source="github"
          title="scikit-uplift"
          img={github}
          text="scikit-uplift is a Python module for classic approaches for uplift modeling built on top of scikit-learn. Uplift prediction aims..."
        />

        <Publication
          style={{
            width: 404,
            height: 317,
            top: 96 + 284 + 8,
            left: 126 + 8 + 380 + 319 + 8,
          }}
          href="https://github.com/kirrlix1994/Retail_hero"
          source="github"
          title="The 2nd place solution of the RetailHero Uplift Modelling contest"
          img={retailhero}
          text="X5 has the ability to send SMS MESSAGES to customers in order to encourage them to make purchases. It is clear that it makes sense to make communication only for those customers..."
        />
      </div>

      {/* <div className="square-bkg-publications" /> */}
    </div>
  );
};

export default Publications;
