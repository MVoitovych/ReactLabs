import React from "react";
import { Wrapper, IconsWrapper, LogoWrapper, StyledText, IconBase, TextDiv } from "./Footer.styles.js";
import TancIco from '../../../icons/tankIco.png';
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,

} from "@ant-design/icons";
import { VerticalLine } from "../../../components/Global.js";


export const Footer = () => {
    return (
        <footer>
            <VerticalLine />
            <Wrapper>
                <TextDiv>
                    <h3>TankStore</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus scelerisque tristique neque.</p>
                </TextDiv>
                <LogoWrapper>
                    <img src={TancIco} />
                    <h1>TankStore</h1>
                </LogoWrapper>
                <IconsWrapper>
                    <IconBase component={YoutubeOutlined} color='#FF0000' />
                    <IconBase component={TwitterOutlined} color='#03A9F4' />
                    <IconBase component={LinkedinOutlined} color='#007AB9' />
                    <IconBase component={InstagramOutlined} color='#3A9F4' />
                </IconsWrapper>
            </Wrapper>
            <VerticalLine />
            <Wrapper>
                <StyledText>© TankStore all rights reserved</StyledText>
            </Wrapper>
        </footer>
    );
};
export default Footer;