import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MapStoreType } from "./type";
import { Coordinates } from "../../../api/route/type";

const initialState: MapStoreType = {
  geometry: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setGeometry(state, action: PayloadAction<Coordinates | null>) {
      state.geometry = action.payload;
    },
  },
});

export const { setGeometry } = mapSlice.actions;

export default mapSlice.reducer;
