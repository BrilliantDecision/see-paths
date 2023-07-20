import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RouteStoreType } from "./type";
import { RowEntity } from "../../../components/RouteTable/type";

const initialState: RouteStoreType = {
  selectedRoute: null,
};

export const routeSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setSelectedRoute(state, action: PayloadAction<RowEntity | null>) {
      state.selectedRoute = action.payload;
    },
  },
});

export const { setSelectedRoute } = routeSlice.actions;

export default routeSlice.reducer;
