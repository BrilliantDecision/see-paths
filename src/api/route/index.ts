import axios from "axios";
import { LatLngLiteral } from "leaflet";
import { GetRouteResponse } from "./type";

const baseURL = "https://router.project-osrm.org";

export const getRoute = async (points: LatLngLiteral[]) => {
  const parsedLatLng = points
    .map((val) => [val.lng, val.lat].join(","))
    .join(";");

  const response = await axios.get<GetRouteResponse>(
    `/route/v1/driving/${parsedLatLng}?geometries=geojson`,
    {
      baseURL,
    }
  );
  return response.data;
};
