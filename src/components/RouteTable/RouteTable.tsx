import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FC, useState } from "react";
import { RowEntity } from "./type";
import "./style.css";

interface Props {
  columns: ColumnsType<RowEntity>;
  data: RowEntity[];
}

export const RouteTable: FC<Props> = ({ columns, data }) => {
  const [selectedRow, setSelectedRow] = useState<RowEntity | null>(null);

  const onClickRow = (item: RowEntity) => {
    if (item.key === selectedRow?.key) setSelectedRow(() => null);
    else setSelectedRow(() => item);
  };

  return (
    <Table
      rowClassName={() => "rowCursor"}
      rowSelection={{
        selectedRowKeys: selectedRow ? [selectedRow.key] : [],
        hideSelectAll: true,
        renderCell: () => "",
      }}
      onRow={(record) => {
        return {
          onClick: () => onClickRow(record),
        };
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
