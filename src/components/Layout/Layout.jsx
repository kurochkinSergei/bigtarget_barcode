import React, { useState } from "react";
import { tabs, tabContent } from "./index";
import { elPurple, white } from "constants/colors";

import "./Layout.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const Layout = () => {
  // const tab = parseUrl
  const defaultActiveKey = tabs[0].id;
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  return (
    <div className="layout">
      <div className="tabbar">
        <Tabs
          defaultActiveKey={defaultActiveKey}
          onChange={(activeKey) => setActiveTab(activeKey)}
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
