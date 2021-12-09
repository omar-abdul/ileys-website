const Cards = ({ bgColor, text, title, imgSrc }) => {
  return (
<<<<<<< HEAD
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
=======
    <div className={`card mb-3 ${bgColor}`} style={{ maxWidth: "650px" }}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <img src={`../asset/img/${imgSrc}`} className="card-img" />
        </div>
        <div className="col-md-4">
          <div className={`card-body  empty`} id="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text fw-bold">{text}</p>
          </div>
        </div>
>>>>>>> 5491111f37f210d9c52841a61bc900fdd8c2267c
      </div>
    </div>
  );
};
export default Cards;
