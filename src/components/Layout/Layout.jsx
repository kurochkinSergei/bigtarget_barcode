import React, { useState } from "react";
import { tabs, tabContent } from "./index";

const Layout = ({ content }) => {
  // const tab = parseUrl
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="tabbar">{tabs.map((tab) => tab.id)}</div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default Layout;
