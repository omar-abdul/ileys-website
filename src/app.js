import { useState } from "react";
import ReactDOM from "react-dom";
import { Buttons } from "./Buttons";
import Cards from "./Cards";

const App = () => {
  const arr = [
    {
      id: 2,
      color: "bg-danger text-white",
      productName: "Detergent Powders",
      imgSrc: "all-detergent-resized.jpg",
      text: "A powerful triple formula powder meant to fight the toughest of stains",
    },
    {
      id: 3,
      color: "bg-light-blue text-white",
      productName: "Washing Machine Powders",
      imgSrc: "washing-machine-powder.jpg",
      text: "Leave your dirty works to our Washing Machine Powder ",
    },
    {
      id: 4,
      color: "bg-pink",
      productName: "Liquid Detergents",
      imgSrc: "liquid-products.jpg",
      text: "Whatever the stain, Our strong yet gentle variable Liquid Detergents will take care of it",
    },
    {
      id: 5,
      color: "bg-damp-yellow",
      productName: "Laundry Soap",
      imgSrc: "Safi-Soap.jpg",
      text: "Safi Soap sets the bar cleaning the toughest of slime",
    },
  ];

  const [infoCard, setInfoCard] = useState(arr[0]);
  const handleButtonClick = (item) => {
    const cardBody = document.getElementById("card-img");

    // cardBody.classList.add("card-current");

    // setTimeout(() => cardBody.classList.remove("card-current"), 1000);

    return setInfoCard(item);
  };
  return (
    <div className="product-container">
      <div className="list-buttons">
        <Buttons
          iteration={arr}
          changeItem={handleButtonClick}
          activeId={infoCard.id}
        />
      </div>
      <div className="card-container" data-aos="fade-right">
        <Cards
          bgColor={infoCard.color}
          text={infoCard.text}
          title={infoCard.productName}
          imgSrc={infoCard.imgSrc}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("product-section"));
