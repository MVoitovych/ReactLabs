import React, { useContext } from "react";
import { Card } from "antd";
import { Desc, ButtonDiv } from "./CardItem.styles";
import { Link } from "react-router-dom";
import { itemContext } from "../../App";

import T64 from "../../icons/T64.jpg";
import T64BM from "../../icons/T64BM.jpg";
import T72 from "../../icons/T72B3.jpg";
import T72B3 from "../../icons/T72.jpg";
import Oplot from "../../icons/Oplot.png";
import Abrams from "../../icons/Abrams.jpg";



const { Meta } = Card;

const CardItem = ({ title = 'No title.', text = 'No info', imageSrc, price = 0, ammount = 0, country = 'No info' }) => {
  let { item, setItem } = useContext(itemContext);

  let img;
  switch (imageSrc) {
    case 'T64':
      img = T64;
      break;
    case 'T64BM':
      img = T64BM;
      break;
    case 'T72':
      img = T72;
      break;
    case 'T72B3':
      img = T72B3;
      break;
    case 'Oplot':
      img = Oplot;
      break;
    case 'Abrams':
      img = Abrams;
      break;
  }

  return (
    <Card
      hoverable
      style={{ width: 300, borderRadius: "20px" }}
      cover={
        <img style={{ borderRadius: "15px" }} alt="example" src={img} />
      }
    >
      <Meta title={title} description={text} />
      <Desc>
        <p>Country: {country}</p>
        <p>Ammount: {ammount} units </p>
        <p>${price}</p>

        <ButtonDiv>
          <Link exect to="/catalogue/item">
            <button onClick={(event) => {
              setItem({ title, text, img, price, ammount, country });
            }}>
              View More</button></Link>
        </ButtonDiv>
      </Desc>
    </Card >
  )
}

export default CardItem;