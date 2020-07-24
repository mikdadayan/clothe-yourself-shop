import React from "react";
// import SHOP_DATA from './shop.data';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component.jsx";


const ShopPage = ({match}) => {
    // console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}



export default ShopPage;