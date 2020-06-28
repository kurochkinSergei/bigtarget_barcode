import React from "react";
import { Table as AntdTable, Tooltip } from "antd";
import { data } from "../data";
import { elPurple } from "constants/colors";
import round from "utils/round";

const ColTitle = ({ title }) => {
  if (title.length > 10)
    return (
      <Tooltip placement="bottom" color={elPurple} title={title}>
        <span>{`${title.slice(0, 8)}...`}</span>
      </Tooltip>
    );
  return <span>{title}</span>;
};

const getColumns = (data) => {
  const colsArr = Object.keys(data[0])
    .filter((key) => !["uplift", "shap"].includes(key))
    .map((key, index) => ({
      title: <ColTitle title={key} />,
      dataIndex: key,
      key: key,
      width: 50,
      render: (text) => {
        if (text === undefined || text === null) return "";
        return round(text, 3);
      },
      ...(index === 0 && {
        fixed: "left",
        width: 110,
      }),
    }));

  return colsArr;
};
const Table = ({ selectedRow, setSelectedRow }) => {
  const columns = getColumns(data);

  const rowSelection = {
    selectedRowKeys: [selectedRow.key || 0],
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows[0]);
    },
  };

  return (
    <div
      style={{
        margin: "-48px 8px 16px",
        width: `calc(100% - 32px)`,
      }}
    >
      <AntdTable
        scroll={{ x: 1500, y: 300 }}
        columns={columns}
        dataSource={data.map((data, index) => ({
          ...data,
          key: index,
        }))}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        pagination={{ pageSize: 50, position: ["topRight"] }}
      />
    </div>
  );
};

export default Table;
