import { LatLngLiteral } from "leaflet";

export interface RowEntity {
  key: string;
  path: string;
  [key: `point${number}`]: LatLngLiteral;
}
