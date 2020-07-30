import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInAndSignUp from "./pages/sign-in-and-signup.component/sign-in-and-signup.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionDocuments,
} from "./components/firebase/firebase.utils";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ChekoutPage from "./pages/checkout/checkout.component";
import { setCurrentUser } from "./components/redux/user/user-action";
import { selectCurrentUser } from "./components/redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionForPreview } from "./components/redux/shop/shop-selector";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...(await snapshot.data()),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // console.log(collectionsArray)
      // addCollectionDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={ChekoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopCollectionForPreview
});

// ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapDispatchToState = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToState)(App);
