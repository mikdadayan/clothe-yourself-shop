import { createSelector } from "reselect";
// import { createStore } from "redux";

const shopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);
