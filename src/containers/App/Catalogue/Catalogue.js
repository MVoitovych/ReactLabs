import React, { useState, useEffect } from "react";
import { CardWrapper } from "../Home/Home.styles";
import CardItem from "../../../components/CardItem/CardItem";
import { Container, FlexDiv } from "../../../components/Global";
import { CardUl } from "./Catalogue.styles";
import Icon, { SearchOutlined } from "@ant-design/icons";
import { Input, SelectDiv, StyledButton, StyledSelect } from "./SelectBar/SelectBar.styles";
import { getRequest, sleep } from "../../../API";
let tanks = [];
export const Catalogue = () => {

    const [tanksToBeDrawn, setTanks] = useState([]);
    const [filteredValue, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getRequest({}).then(resp => {
            sleep(300);
            console.log("now");
            tanks = [...resp.data];
            setTanks(tanks);
            setLoading(false);
        });
    }, []);


    let filteredTanks = tanksToBeDrawn.filter(tank => {
        return tank.title.toLowerCase().includes(filteredValue.toLowerCase());
    });


    return (
        <Container>
            <Container>

                <SelectDiv>
                    <FlexDiv>
                        <StyledSelect name="filter1" id="coutry_select">
                            <option value="all">Country</option>
                            {
                                tanks.map(
                                    (value) => {
                                        return value.country;
                                    }
                                ).filter(
                                    (value, index, self) => {
                                        return self.indexOf(value) === index;
                                    }
                                ).sort(
                                    (value1, value2) => {
                                        return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                    }
                                ).map(
                                    (el) => {
                                        return <option value={el} key={el}> {el} </option>
                                    })
                            }

                        </StyledSelect>
                        <StyledSelect name="Filter2" id="price_select">
                            <option value="0" >Price</option>
                            {
                                tanks.map(
                                    (value) => {
                                        return value.price;
                                    }
                                ).filter(
                                    (value, index, self) => {
                                        return self.indexOf(value) === index;
                                    }
                                ).sort(
                                    (value1, value2) => {
                                        return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                    }
                                ).map(
                                    (el) => {
                                        return <option value={el} key={el}> {el} </option>
                                    })
                            }

                        </StyledSelect>
                        <StyledSelect name="Filter3" id="ammount_select">
                            <option value="0" >Ammount</option>
                            {
                                tanks.map(
                                    (value) => {
                                        return value.ammount;
                                    }
                                ).filter(
                                    (value, index, self) => {
                                        return self.indexOf(value) === index;
                                    }
                                ).sort(
                                    (value1, value2) => {
                                        return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                    }
                                ).map(
                                    (el) => {
                                        return <option value={el} key={el}> {el} </option>
                                    })
                            }

                        </StyledSelect>
                    </FlexDiv>
                    <div>
                        <form>
                            <SearchOutlined />
                            <Input type="text" placeholder="Search tank ..."
                                onChange={(event) => setValue(event.target.value)}
                            />
                        </form>
                    </div>
                    <div>
                        <StyledButton onClick={() => {
                            setLoading(true);
                            let country = document.getElementById("coutry_select").value;
                            let price = document.getElementById("price_select").value;
                            let ammount = document.getElementById("ammount_select").value;

                            getRequest({ country, price, ammount }).then(resp => {
                                sleep(200);
                                console.log("now");
                                tanks = [...resp.data];
                                setTanks(tanks);
                                setLoading(false);
                            });
                        }}>
                            Apply
                        </StyledButton>
                    </div>
                </SelectDiv>

            </Container>
            {
                (() => {
                    if (loading) {
                        console.log("load");
                        return (<div class="loader">Loading...</div>)
                    } else {
                        console.log("list");
                        return (
                            <CardWrapper>
                                <CardUl>
                                    {filteredTanks.map(({ title, text, image, price, ammount, country }, idx) => (
                                        <li>
                                            <CardItem
                                                title={title}
                                                text={text}
                                                imageSrc={image}
                                                ammount={ammount}
                                                country={country}
                                                price={price}
                                                id={idx}
                                            />
                                        </li>
                                    ))}
                                </CardUl>
                            </CardWrapper>
                        )
                    }
                })()}
        </Container>

    )
}

export default Catalogue;