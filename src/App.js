import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInAndSignUp from "./pages/sign-in-and-signup.component/sign-in-and-signup.component";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ChekoutPage from "./pages/checkout/checkout.component";
import { setCurrentUser } from "./components/redux/user/user-action";
import { selectCurrentUser } from "./components/redux/user/user-selectors";
import { createStructuredSelector } from "reselect";



class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async (snapshot) => {
          console.log("88888", snapshot.data());
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...(await snapshot.data()),
            },
            () => {
              console.log("$$$$$", this.state);
            }
          );
        });
        console.log("#####", this.state);
      } else {
        this.props.setCurrentUser(userAuth);
      }
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
          <Route  path="/shop" component={ShopPage} />
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
  currentUser: selectCurrentUser
})

// ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapDispatchToState = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToState)(App);
