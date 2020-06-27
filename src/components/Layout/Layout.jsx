import React, { useState, useEffect } from "react";
import { tabs, tabContent } from "./index";
import { elPurple, white } from "constants/colors";

import barcode from "assets/barcode.svg";

import "./Layout.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const getActiveTabFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("tab");
};

const Layout = () => {
  const defaultActiveKey = getActiveTabFromUrl() || tabs[0].id;
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  useEffect(() => {
    window.onpopstate = (e) => {
      if (!e.state.tab) return;
      setActiveTab(e.state.tab);
    };
  }, []);
  return (
    <div className="layout">
      <img className="barcode" src={barcode} alt="barcode" />
      <div className="tabbar">
        <Tabs
          activeKey={activeTab}
          onChange={(activeKey) => {
            if (activeKey === activeTab) return;
            setActiveTab(activeKey);
            const selectedTab = tabs.find((tab) => tab.id === activeKey);
            window.history.pushState(
              { tab: selectedTab.id },
              selectedTab.label,
              `?tab=${selectedTab.id}`
            );
          }}
          tabPosition="right"
        >
          {tabs.map((tab) => (
            <TabPane tab={tab.label} key={tab.id} />
          ))}
        </Tabs>
      </div>
      <div
        className="tab-content"
        style={{
          backgroundColor: activeTab === "team" ? elPurple : white,
        }}
      >
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Layout;
