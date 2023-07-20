export interface GetRouteResponse {
  routes: Route[];
}

interface Route {
  geometry: Geometry;
}

interface Geometry {
  coordinates: Coordinates;
}

export type Coordinates = [number, number][] | null;
