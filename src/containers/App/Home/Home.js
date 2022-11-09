import { BodyButton, ButtonDiv, Hero, HeroText, CardWrapper } from "./Home.styles";
import Tank from "../../../icons/Tank.jpg";
import { VerticalLine } from "../../../components/Global";
import CardItem from "../../../components/CardItem/CardItem";
// import tanks from "../../../components/Data/Data";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRequest } from "../../../API";

// let sortedTanks = tanks.filter((item, index) => { return index < 3 });


export const Home = () => {

    const [tanks, setTanks] = useState([]);

    useEffect(() => {
        getRequest({}).then(resp => {
            setTanks([...resp.data]);
        });
    }, []);


    const [interactiveView, changeView] = useState({
        value0: "",
        value1: null,
        value2: "View More"
    });

    return (
        <main>
            <Hero>
                <img src={Tank} />
                <HeroText>
                    <h2>About our store</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        scelerisque tristique neque, eget facilisis purus consequat sit
                        amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
                        eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
                        Quisque sed tincidunt felis. Sed bibendum</p>
                </HeroText>

            </Hero>
            <VerticalLine />
            <CardWrapper>
                {
                    tanks.filter((t, i) => i < 3).map(
                        ({ title, text, image, price, ammount, country }, idx) => (
                            <CardItem
                                title={title}
                                text={text}
                                imageSrc={image}
                                ammount={ammount}
                                country={country}
                                price={price}
                                id={idx}
                            />
                        ))}
            </CardWrapper>
            <ButtonDiv>
                <BodyButton onClick={() => {
                    changeView({ value0: "Count of destroyed russian tanks", value1: interactiveView.value1 ? interactiveView.value1 + 20 : 20, value2: "Destroy MORE!!" });
                }}>
                    {interactiveView.value2}
                </BodyButton>
            </ButtonDiv>
            <p style={{ fontSize: '50px', color: 'red' }}
            > {interactiveView.value0} {interactiveView.value1}</p>

        </main>
    )

}

export default Home;