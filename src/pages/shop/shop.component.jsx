import React from "react";
// import SHOP_DATA from './shop.data';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";


const ShopPage = ({match}) => {
    console.log(CategoryPage)
    console.log(`${match.path}/:category`)
    return (
        <div className='shop-page'>
            <Route path={`${match.path}/:categoryId`} render={() => <CategoryPage/>} />

            <Route exact path={`${match.path}`} component={CollectionOverview} />
        </div>
    )
}



export default ShopPage;