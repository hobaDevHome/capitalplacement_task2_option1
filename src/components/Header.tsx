import { Menu, Typography } from "antd";
import "./menu.css";

import {
  TagOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { colors } from "../constants";

import DropDownListComponent from "./DropDownListComponent";

const items: MenuProps["items"] = [
  {
    label: "Submit and continue",
    key: "1",
  },
];

const { Text } = Typography;

const HeaderBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <div>
        <Typography.Title level={4} style={{ margin: 0, color: colors.blue }}>
          London Internship Program
        </Typography.Title>
        <Text strong>London</Text>
      </div>
      <div>
        <DropDownListComponent />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <TagOutlined
                    className="header-icon"
                    style={{ fontSize: 24 }}
                  />
                ),
              },
              {
                key: "2",
                icon: (
                  <UserDeleteOutlined
                    className="header-icon"
                    style={{ fontSize: 24 }}
                  />
                ),
              },
              {
                key: "3",
                icon: (
                  <UserAddOutlined
                    className="header-icon"
                    style={{ fontSize: 24 }}
                  />
                ),
              },
              {
                key: "4",
                icon: <UserOutlined style={{ fontSize: 24 }} />,
              },
              {
                key: "5",
                icon: <MailOutlined style={{ fontSize: 24 }} />,
              },
            ]}
          />
        </div>
        <div>
          <Dropdown.Button
            type="primary"
            menu={{ items }}
            icon={<DownOutlined style={{ color: colors.white, fontSize: 9 }} />}
          >
            Move To Video Interview I
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
