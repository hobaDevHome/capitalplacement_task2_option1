import {
  CarryOutOutlined,
  FileTextOutlined,
  HeartOutlined,
  HomeOutlined,
  SettingOutlined,
  LeftOutlined,
  ShareAltOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Book from "../svg/book.svg";
import Users from "../svg/users.svg";
import { Layout, Menu, Button } from "antd";
import { colors } from "../constants";

import { useState } from "react";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                backgroundColor: colors.lightGrey,
                borderRadius: 16,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            ></div>
          </div>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined style={{ fontSize: 24 }} />,
                label: "Home",
                style: { marginBottom: 30 },
              },
              {
                key: "2",
                icon: (
                  <img
                    src={Users}
                    alt="React Logo"
                    style={{ width: 24, height: 24 }}
                  />
                ),
                label: "Candidates",
                style: { marginBottom: 30 },
              },
              {
                key: "3",
                icon: <CarryOutOutlined style={{ fontSize: 24 }} />,
                label: "Callender",
                style: { marginBottom: 30 },
              },
              {
                key: "4",
                icon: <ShareAltOutlined style={{ fontSize: 24 }} />,
                label: "Shared ",
                style: { marginBottom: 30 },
              },
              {
                key: "5",
                icon: <FileTextOutlined style={{ fontSize: 24 }} />,
                label: "CV's",
                style: { marginBottom: 30 },
              },
              {
                key: "6",
                icon: (
                  <img
                    src={Book}
                    alt="React Logo"
                    style={{ width: 24, height: 24 }}
                  />
                ),
                label: "Categories",
                style: { marginBottom: 30 },
              },
              {
                key: "7",
                icon: <HeartOutlined style={{ fontSize: 24 }} />,
                label: "Liked",
              },
            ]}
          />
          <Button
            type="text"
            icon={collapsed ? <LeftOutlined /> : <RightOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <Button
              type="text"
              icon={<SettingOutlined style={{ fontSize: 24 }} />}
            />
          </div>
          <div style={{ padding: 8 }}>
            <div
              style={{
                width: 24,
                height: 24,
                backgroundColor: colors.fadedBlue,
                borderRadius: 14,
                fontSize: 10,
                color: colors.ligtBlue,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              HA
            </div>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
