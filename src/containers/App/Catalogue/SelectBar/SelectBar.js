import React from "react";
import { Container, FlexDiv } from "../../../../components/Global";
import { StyledSelect, StyledButton, SelectDiv, Input } from "./SelectBar.styles";
import Icon, { SearchOutlined } from "@ant-design/icons";
export const SelectBar = () => {
    return (
        <Container>
            <SelectDiv>
                <FlexDiv >
                    <StyledSelect name="Filter1">
                        <option value="value1" selected>Filter 1</option>
                        <option value="value2" >Filter 2</option>
                        <option value="value3">Filter 3</option>
                    </StyledSelect>
                    <StyledSelect name="Filter2">
                        <option value="value1">Filter 1</option>
                        <option value="value2" selected>Filter 2</option>
                        <option value="value3">Filter 3</option>
                    </StyledSelect>
                    <StyledSelect name="Filter3">
                        <option value="value1">Filter 1</option>
                        <option value="value2" >Filter 2</option>
                        <option value="value3" selected>Filter 3</option>
                    </StyledSelect>
                </FlexDiv>
                <div>
                    <form>
                        <SearchOutlined />
                        <Input type="text" placeholder="Search tank ..." 
                        />
                    </form>
                </div>
                <div>
                    <StyledButton>Apply</StyledButton>
                </div>
            </SelectDiv>
        </Container>
    )
}

export default SelectBar;