import React from "react";
import { LogoWrapper, StyledHeader, HeaderDiv } from "./Header.styles.js";
import TancIco from '../../../icons/tankIco.png';
import { VerticalLine } from "../../../components/Global.js";
import Navigation from "../../Navigation/Navigation.js";



const Header = () => {
    return (
        <StyledHeader>
            <HeaderDiv>
                <LogoWrapper>
                    <img src={TancIco} />
                    <h2>TankStore</h2>
                </LogoWrapper>
                <Navigation></Navigation>
            </HeaderDiv>
            <VerticalLine />
        </StyledHeader>

    )
}

export default Header;