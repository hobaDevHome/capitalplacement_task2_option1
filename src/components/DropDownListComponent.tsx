import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Menu } from "antd";

import { OpportunityBrowsingItems } from "../data";
import React from "react";

const menu = (
  <Menu>
    {OpportunityBrowsingItems?.map((e) => {
      return (
        <Menu.Item style={{ width: 300 }}>
          <div
            className="menu"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="menu-item">{e.label}</div>
            <div className="menu-item-value">{e.key}</div>
          </div>
        </Menu.Item>
      );
    })}
  </Menu>
);

const DropDownListComponent: React.FC = () => (
  <Dropdown overlay={menu}>
    <a href="lin" onClick={(e) => e.preventDefault()}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 300,
        }}
      >
        Select an Option
        <DownOutlined />
      </div>
    </a>
  </Dropdown>
);

export default DropDownListComponent;
