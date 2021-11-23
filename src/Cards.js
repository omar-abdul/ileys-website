const Cards = ({ bgColor, text, title }) => {
  return (
    <div className={`card text-white ${bgColor}`}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};
export default Cards;
