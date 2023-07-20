import { call, put, takeEvery, select } from "redux-saga/effects";
import { getRoute } from "../../../api/route";
import { RootState } from "../..";
import { RowEntity } from "../../../components/RouteTable/type";
import { routeResponse } from "./types";
import { setGeometry } from "../../reducers/map/map";
import { Coordinates } from "../../../api/route/type";
import { getParsedRoute } from "../../../helpers";

function* getRouteWorker() {
  const selectedRoute: RowEntity | null = yield select(
    (state: RootState) => state.routeReducer.selectedRoute
  );

  if (!selectedRoute) {
    return;
  }

  try {
    const parsedPoints = getParsedRoute(selectedRoute);
    const route: routeResponse = yield call(() => getRoute(parsedPoints));
    const coordinates: Coordinates =
      route.routes[0].geometry.coordinates?.map((val) => [val[1], val[0]]) ??
      null;
    yield put(setGeometry(coordinates));
    // throw new Error();
  } catch (error) {
    alert(error);
  }
}

function* routeWatcher() {
  yield takeEvery("routes/setSelectedRoute", getRouteWorker);
}

export default routeWatcher;
