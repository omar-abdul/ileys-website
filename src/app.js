import { useState } from "react";
import ReactDOM from "react-dom";
import { Buttons } from "./Buttons";
import Cards from "./Cards";

const App = () => {
  const arr = [
    {
      id: 2,
<<<<<<< HEAD
      color: "bg-danger",
      productName: "Hilac",
      imgSrc: "washing-powder-1500058_1920.jpg",
      text: "Text 1",
    },
    {
      id: 3,
      color: "bg-pink",
      productName: "Gaari",
      imgSrc: "gaari.jpg",
      text: "Text 2",
=======
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
>>>>>>> 5491111f37f210d9c52841a61bc900fdd8c2267c
    },
  ];

  const [infoCard, setInfoCard] = useState(arr[0]);
<<<<<<< HEAD
  const handleButtonClick = (item) => setInfoCard(item);
=======
  const handleButtonClick = (item) => {
    const cardBody = document.getElementById("card-body");

    cardBody.classList.add("card-current");

    setTimeout(() => cardBody.classList.remove("card-current"), 1000);

    return setInfoCard(item);
  };
>>>>>>> 5491111f37f210d9c52841a61bc900fdd8c2267c
  return (
    <div className="product-container">
      <div className="list-buttons">
        <Buttons
          iteration={arr}
          changeItem={handleButtonClick}
          activeId={infoCard.id}
        />
      </div>
<<<<<<< HEAD
      <div className="card-container">
=======
      <div className="card-container" data-aos="fade-right">
>>>>>>> 5491111f37f210d9c52841a61bc900fdd8c2267c
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
