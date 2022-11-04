import Icon from '@ant-design/icons';
import styled from 'styled-components';


export const StyledHeader = styled.header`
flex-direction:column;
`;


export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 64px;
    }
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({ color }) => color};
`;

export const NavBar = styled.nav`
    display: flex;

`;

export const HeaderDiv = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
`;
