import { createSelector } from "reselect";
// import { createStore } from "redux";




const shopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectShopCollectionForPreview = createSelector(
  [selectShopCollections], 
  (collections) => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam) => 
createSelector(
  [selectShopCollections],
  (collections) => collections[collectionUrlParam]
)
