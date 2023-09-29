import React from "react";
import { SearchOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Input, Typography } from "antd";
import { colors } from "../constants";
import FilterItem from "./FilterItem";
import { FiltersSelectors } from "../data";

const Filters = () => {
  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
        <Input
          placeholder="Serach by name, edu, exp or #tag"
          style={{ border: "none" }}
          prefix={
            <SearchOutlined style={{ color: colors.grey, fontSize: 18 }} />
          }
        />
        <div
          style={{
            marginLeft: 5,
            color: colors.grey,
            fontSize: 10,
            width: 24,
            height: 24,
            borderRadius: 12,
            border: `1px solid ${colors.grey}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          !
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title level={5}>Filters</Typography.Title>
        <Typography.Title level={5}>0 Selected</Typography.Title>
      </div>
      {FiltersSelectors.map((selector) => {
        return (
          <FilterItem
            lableText={selector.lableText}
            optionsArray={selector.optionsArray}
          />
        );
      })}
    </div>
  );
};

export default Filters;
