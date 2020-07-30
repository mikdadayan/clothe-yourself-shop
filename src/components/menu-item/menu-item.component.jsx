import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

import { BackgroundImage,ContentContainer,MenuItemContainer,SubititleContainer,TitleContainer } from "./menu-item";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}></BackgroundImage>
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubititleContainer>SHOP NOW</SubititleContainer>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);