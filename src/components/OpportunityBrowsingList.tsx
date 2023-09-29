import "../App.css";
import "./menu.css";
import { DownOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { colors } from "../constants";
import { OpportunityBrowsingItems } from "../data";
const Option = Select.Option;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const OpportunityBrowsingList = () => {
  return (
    <div>
      <Select
        defaultValue="Opportunity Browsing"
        style={{ width: 300 }}
        onChange={handleChange}
        bordered={false}
        listItemHeight={50}
        listHeight={800}
        suffixIcon={
          <DownOutlined style={{ color: colors.blue, fontSize: 12 }} />
        }
      >
        {OpportunityBrowsingItems?.map((e) => {
          return (
            <Option key={e.key}>
              <div
                className="menu"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  fontWeight: "bold",
                }}
              >
                <div className="menu-item">{e.label}</div>
                <p className="menu-item-value">{e.key}</p>
              </div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default OpportunityBrowsingList;
