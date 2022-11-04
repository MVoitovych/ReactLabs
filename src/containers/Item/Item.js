import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { itemContext } from "../../App";
import CardItem from "../../components/CardItem/CardItem";
import { Container } from "../../components/Global";
import { Input, StyledSelect } from "../App/Catalogue/SelectBar/SelectBar.styles";
import { RightDiv, FlexDiv, ButtonDiv } from "./Item.styles";

const Item = () => {
    let { item, setItem } = useContext(itemContext);

    return (
        <Container>
            <FlexDiv>
                <img style={{ borderRadius: "15px" }} alt="example" src={item.img} />
                <RightDiv>
                    <div style={{ display: 'flex' }}>
                        <h4 style={{ marginRight: '10px' }}>Ammount: {item.ammount} </h4>
                        <h4>Country: {item.country} </h4>
                    </div>
                    <h1>   {item.title}   </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        scelerisque tristique neque, eget facilisis purus consequat sit
                        amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
                        eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
                        Quisque sed tincidunt felis. Sed bibendum</p>
                    <FlexDiv>
                        <div>
                            <p>Select Field</p>
                            <Input></Input>
                        </div>
                        <div>
                            <p>Select Field</p>
                            <StyledSelect>
                                <option>Option 1</option>
                            </StyledSelect>
                        </div>
                    </FlexDiv>

                </RightDiv>
            </FlexDiv>
            <FlexDiv>
                <h2>Price : $ {item.price} </h2>
                <ButtonDiv>
                    <Link exect to="/catalogue/">
                        <button>Go Back</button></Link>
                    <button>Add to Cart</button>
                </ButtonDiv>
            </FlexDiv>
        </Container>
    )

}

export default Item;