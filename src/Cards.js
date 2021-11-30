const Cards = ({ bgColor, text, title, imgSrc }) => {
  return (
    <div className="product-card">
      <div
        className="product-img"
        style={{ backgroundImage: `url("../asset/img/${imgSrc}")` }}
      ></div>
      <div
        className="product-card-content"
        style={{ backgroundColor: bgColor }}
      >
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Cards;
