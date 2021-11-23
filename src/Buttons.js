export const Buttons = ({ iteration, changeItem, activeId }) => {
  return (
    <div className="d-flex flex-column">
      {iteration.map((x) => (
        <button
          key={x.id}
          type="button"
          className={`btn ${x.productName} btn-light btn-lg btn-block ${
            activeId === x.id ? "active" : ""
          }`}
          onClick={(e) => changeItem(x)}
        >
          {x.productName}
        </button>
      ))}
      ;
    </div>
  );
};
