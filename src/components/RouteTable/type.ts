export interface LatLng {
  lat: number;
  lng: number;
}

export interface RowEntity {
  key: string;
  path: string;
  [key: `point${number}`]: LatLng;
}
