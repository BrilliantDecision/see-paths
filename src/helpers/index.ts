import { RowEntity } from "../components/RouteTable/type";

export const getParsedRoute = (route: RowEntity) => {
  return Object.entries(route)
    .filter((val) => val[0].includes("point"))
    .map((val) => val[1]);
};
