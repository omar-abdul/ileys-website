import { useState } from "react";
import ReactDOM from "react-dom";
import { Buttons } from "./Buttons";
import Cards from "./Cards";

const App = () => {
  const arr = [
    {
      id: 2,
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
    },
  ];

  const [infoCard, setInfoCard] = useState(arr[0]);
  const handleButtonClick = (item) => setInfoCard(item);
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <Buttons
          iteration={arr}
          changeItem={handleButtonClick}
          activeId={infoCard.id}
        />
      </div>
      <div className="col-12 col-md-4">
        <Cards
          bgColor={infoCard.color}
          text={infoCard.text}
          title={infoCard.productName}
        />
      </div>
      <div className="col-12 col-md-4">
        <img src={`../asset/img/${infoCard.imgSrc}`} className="img-fluid" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("product-section"));
