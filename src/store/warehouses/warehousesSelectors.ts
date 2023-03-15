import { RootState } from "../index";

export const warehousesSelector = (state: RootState) => state.warehouses.data;
export const totalWarehousesSelector = (state: RootState) =>
  state.warehouses.total;
