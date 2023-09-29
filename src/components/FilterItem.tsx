import React from "react";
import { FileTextOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { colors } from "../constants";
import { DownOutlined } from "@ant-design/icons";

const handleChange = () => {
  console.log(`Selected: `);
};

interface Label {
  label: String;
  value: String;
}

interface FilterProps {
  lableText: String;
  optionsArray: Label[];
}

const FilterItem: React.FC<FilterProps> = ({ lableText, optionsArray }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <FileTextOutlined style={{ marginLeft: 5, marginRight: 10 }} />
        <Select
          suffixIcon={
            <DownOutlined style={{ color: colors.blue, fontSize: 9 }} />
          }
          defaultValue={lableText}
          style={{ width: "100%" }}
          onChange={handleChange}
          options={optionsArray}
          bordered={false}
          dropdownStyle={{ color: colors.blue }}
        />
      </div>
    </div>
  );
};

export default FilterItem;
