const Cards = ({ bgColor, text, title, imgSrc }) => {
  return (
    <div className={`card mb-3 ${bgColor}`}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <img src={`../asset/img/${imgSrc}`} className="card-img" />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text fw-bold">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
