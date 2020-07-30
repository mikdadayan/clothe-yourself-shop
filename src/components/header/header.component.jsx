import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../redux/cart/cart-selectors";
import { selectCurrentUser } from "../redux/user/user-selectors";
// import { toggleCartHidden } from "../redux/cart/cart-action";

import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from "./header.styles";


const Header = ({ currentUser,  hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop" >
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  currentUser: selectCurrentUser
}) 

// ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser: currentUser,
//   hidden: hidden,
// });


export default connect(mapStateToProps)(Header);
