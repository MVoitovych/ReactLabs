import styled from 'styled-components';

export const StyledSelect = styled.select`
    width: 200px;
    height: 25px;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    margin-right: 15px;
`;

export const StyledButton = styled.button`
    width: 200px;
    height: 24px;
    border-radius: 10px;
    border-width: 1px;
    font-size: 16px;
    background: none;
    :hover{
        background-color:gray;
        color: white;
    }
`;

export const SelectDiv = styled.div`
    justify-content:space-between;
    display:flex;
`;

export const Input = styled.input`
    width: 200px;
    height: 20px;
    border-radius: 10px;
    border-width: 1px;
    font-size: 16px;
    background: none;

`;
