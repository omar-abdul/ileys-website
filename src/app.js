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
      imgSrc: "all-detergent.jpg",
      text: "A powerful triple formula powder meant to fight the toughest of stains",
    },
    {
      id: 3,
      color: "bg-light-blue text-white",
      productName: "Washing Machine Powders",
      imgSrc: "washing-powder-1500058_1920.jpg",
      text: "Washing Machine a new partner",
    },
    {
      id: 4,
      color: "bg-pink",
      productName: "Liquid Detergents",
      imgSrc: "gaari.jpg",
      text: "All your liquid needs",
    },
    {
      id: 5,
      color: "bg-damp-yellow",
      productName: "Laundry Soap",
      imgSrc: "gaari.jpg",
      text: "tough soap",
    },
  ];

  const [infoCard, setInfoCard] = useState(arr[0]);
  const handleButtonClick = (item) => setInfoCard(item);
  return (
    <div className="product-container">
      <div className="list-buttons">
        <Buttons
          iteration={arr}
          changeItem={handleButtonClick}
          activeId={infoCard.id}
        />
      </div>
      <div className="card-container">
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
