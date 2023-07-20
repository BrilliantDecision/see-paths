import { SagaReturnType } from "redux-saga/effects";
import { getRoute } from "../../../api/route";

export type routeResponse = SagaReturnType<typeof getRoute>;
