import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    p { 
        color: 8E8E93;
        text-align: left;
        font-weight: 200;
    }
    h3 {
        margin-top: 5px;
        margin-bottom: 2px;
    }
    span { 
        margin: 0 10px;
    }
`;

export const IconsWrapper = styled.div`
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({ color }) => color};
`;


export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    img{max-width:24px;}
`;

export const StyledText = styled.p`
    margin:0 auto;
`;

export const TextDiv = styled.div`
    flex-direction: column;
    width: 22%;
`;