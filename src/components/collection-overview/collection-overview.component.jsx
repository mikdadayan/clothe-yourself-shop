import React from "react";
import './collection-overview.styles.scss';


import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollections } from "../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);