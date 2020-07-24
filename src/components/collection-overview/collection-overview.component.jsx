import React from "react";
import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionForPreview } from "../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CollectionOverview = ({ collections, match }) => {
  console.log("^^^^^^^^", collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
