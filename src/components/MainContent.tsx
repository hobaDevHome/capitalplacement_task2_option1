import { Layout, theme } from "antd";
import HeaderBar from "./Header";
import Filters from "./Filters";
import Candidates from "./Candidates";

const { Content } = Layout;

const MainContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ marginLeft: 20, marginBottom: 20 }}>
      <HeaderBar />

      <Content
        style={{
          margin: "24px 16px",
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingRight: 20,
            }}
          >
            <Filters />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 3,
            }}
          >
            <Candidates />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default MainContent;
