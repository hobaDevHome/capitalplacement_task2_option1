import { Layout, theme } from "antd";
import CandidateCard from "./CandidateCard";
import { candidatesData } from "../data";
import CandidateHeader from "./CandidateHeader";

const { Content } = Layout;

const Candidates: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <CandidateHeader />
      <Content className="site-layout" style={{ padding: "0 20px" }}>
        <div style={{ minHeight: 380, background: colorBgContainer }}>
          {candidatesData.length > 0 &&
            candidatesData.map((item) => {
              return (
                <CandidateCard
                  name={item.name}
                  education={item.education}
                  location={item.location}
                  areas={item.areas}
                  identifiers={item.identifiers}
                  programs={item.programs}
                  videos={item.videos}
                />
              );
            })}
        </div>
      </Content>
    </Layout>
  );
};

export default Candidates;
