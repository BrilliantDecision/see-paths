import "./App.css";
import { RouteTable } from "./components/RouteTable/RouteTable";
import { LatLng, RowEntity } from "./components/RouteTable/type";
import type { ColumnGroupType, ColumnType, ColumnsType } from "antd/es/table";
import { data } from "./data";

function App() {
  const renderCoordinates = (latLng: LatLng) => (
    <p className="textLatLng">
      {latLng.lat},<br />
      {latLng.lng}
    </p>
  );

  const columns: ColumnsType<RowEntity> = [
    {
      title: "Маршрут",
      dataIndex: "path",
      key: "path",
      align: "center",
    },
    ...data.map(
      (val) =>
        ({
          title: `Точка ${val.key} (lat, lng)`,
          dataIndex: `point${val.key}`,
          key: val.key,
          render: renderCoordinates,
          align: "center",
        } as ColumnGroupType<RowEntity> | ColumnType<RowEntity>)
    ),
  ];

  return (
    <div className="App">
      <RouteTable columns={columns} data={data} />
    </div>
  );
}

export default App;
