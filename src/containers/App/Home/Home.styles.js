import styled from "styled-components";

export const Hero = styled.div`

display:flex;
justify-content: space-around;
text-align: left;
width: 1200px;
    img{
        max-height: 300px;
        max-width: 40%;
        border-radius: 15px;
    }
     
`;

export const HeroText = styled.div`
    flex-direction: column;
    text-align: left;
    width: 40%;
    
    p{
        margin-top: 0px;
    }

    h2{
        margin-bottom: 5px;
    }

`;


export const ButtonDiv = styled.div`
    width: 150px; 
    padding-top: 50px;
    padding-bottom: 100px;
    margin: 0  auto;
    justify-content: space-between;
    align-items: center;
    button:hover{
        background-color: gray;
        color: black;
    }
`;
export const BodyButton = styled.button`
    background-color: black;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    color: white;
    font-size: 15px;
    
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    max-width: 1200px;
`;

export const SectionWrapper = styled.div`
    display: flex;
    background-color: #bdaeac;
    height: 100%;
    width:100%;
    justify-content: space-between;
    padding: 0 200px;
`;

