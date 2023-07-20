import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { RowEntity } from "./type";
import "./style.css";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setSelectedRoute } from "../../store/reducers/route/route";
import { setGeometry } from "../../store/reducers/map/map";

interface Props {
  columns: ColumnsType<RowEntity>;
  data: RowEntity[];
}

export const RouteTable: FC<Props> = ({ columns, data }) => {
  const dispatch = useAppDispatch();
  const { selectedRoute } = useAppSelector((state) => state.routeReducer);

  const onClickRow = (item: RowEntity) => {
    if (item.key === selectedRoute?.key) dispatch(setSelectedRoute(null));
    else dispatch(setSelectedRoute(item));
    dispatch(setGeometry(null));
  };

  return (
    <Table
      className="rootTableContainer"
      rowClassName={() => "rowCursor"}
      rowSelection={{
        selectedRowKeys: selectedRoute ? [selectedRoute.key] : [],
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
