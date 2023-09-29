import React from "react";
import { Checkbox, Typography } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { colors } from "../constants";

const { Text, Title } = Typography;
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const CandidateHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 40 }}>
          <Checkbox onChange={onChange} style={{ transform: "scale(1.5)" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title
            level={5}
            style={{
              color: colors.blue,
              padding: 0,
              margin: 0,
            }}
          >
            247 Candidates
          </Title>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 30 }}>
          <Title
            level={5}
            style={{ color: colors.blue, padding: 0, margin: 0 }}
          >
            Qualified
          </Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              marginRight: 30,
            }}
          >
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              Task
            </Title>
            <Text style={{ marginLeft: 15 }}>25</Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              marginRight: 30,
            }}
          >
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              Disqualified
            </Title>
            <Text style={{ marginLeft: 15 }}>78</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;
