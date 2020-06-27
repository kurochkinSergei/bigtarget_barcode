import React, { useState } from "react";
import { Table as AntdTable, Tooltip } from "antd";
import { data } from "../data";
import { elPurple } from "constants/colors";

const ColTitle = ({ title }) => {
  console.log("title", title);
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
    .filter((key) => !["uplift"].includes(key))
    .map((key, index) => ({
      title: <ColTitle title={key} />,
      dataIndex: key,
      key: key,
      width: 50,
      render: (text) => {
        if (text === undefined || text === null) return "";
        return Math.round(parseFloat(text) * 1000) / 1000;
      },
      ...(index === 0 && {
        fixed: "left",
        width: 110,
      }),
    }));

  return colsArr;
};
const Table = ({ setSelectedRow }) => {
  const columns = getColumns(data);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows[0]);
    },
    // getCheckboxProps: record => ({
    //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  return (
    <div
      style={{
        margin: 16,
      }}
    >
      <AntdTable
        scroll={{ x: 1500, y: 300 }}
        columns={columns}
        dataSource={data.map((data, index) => ({ ...data, key: index }))}
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
