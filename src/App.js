import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import SignInAndSignUp from "./pages/sign-in-and-signup.component/sign-in-and-signup.component";
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async snapshot => {
          console.log(snapshot.data())
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...(await snapshot.data())
            } 
          }, () => {
            console.log(this.state)

          })
        })
        console.log(this.state)
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
