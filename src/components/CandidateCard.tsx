import React from "react";
import { Checkbox, Typography, Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { PlayCircleOutlined, ScheduleOutlined } from "@ant-design/icons";
import { colors } from "../constants";
const { Text, Link, Title } = Typography;

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
interface CandidateInfo {
  name: String;
  location: String;
  education: String;
  identifiers?: string[];
  areas?: String[];
  videos?: number;
  programs?: number;
}
const CandidateCard: React.FC<CandidateInfo> = ({
  name,
  location,
  education,
  identifiers,
  areas,
  videos,
  programs,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div style={{ paddingRight: 30 }}>
        <Checkbox onChange={onChange} style={{ transform: "scale(1.5)" }} />
      </div>

      <div style={{ paddingRight: 30 }}>
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: colors.fadedBlue,
            borderRadius: 28,
            fontSize: 18,
            color: colors.ligtBlue,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          HA
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Title level={4} style={{ marginBottom: 8, paddingBottom: 0 }}>
          {name}
        </Title>
        <Title level={5} style={{ marginTop: 0, paddingTop: 0 }}>
          {location}
        </Title>
        <Text>{education}</Text>
        {identifiers && identifiers?.length > 0 && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {identifiers.map((e) => {
              return (
                <Link href="" target="_blank" style={{ marginRight: 10 }}>
                  {e}
                </Link>
              );
            })}
          </div>
        )}

        {areas && areas?.length > 0 && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {areas.map((e) => {
              return (
                <Button
                  type="text"
                  style={{ color: colors.teal, fontWeight: "bold" }}
                >
                  {e}
                </Button>
              );
            })}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifySelf: "end",
          marginRight: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {videos && (
          <div>
            <PlayCircleOutlined
              style={{ color: colors.blue, marginRight: 8 }}
            />
            <span style={{ color: colors.blue }}>{videos}</span>
          </div>
        )}
        {programs && (
          <div
            style={{
              backgroundColor: colors.fadedBlue,
              width: 130,
              height: 30,
              borderRadius: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              padding: 10,
            }}
          >
            <ScheduleOutlined style={{ color: colors.blue }} />
            <div style={{ marginLeft: 10, color: colors.blue }}>
              {programs} Programs
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
