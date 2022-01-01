export const Buttons = ({ iteration, changeItem, activeId }) => {
  return (
    <div className="list-group">
      {iteration.map((x) => (
        <button
          key={x.id}
          type="button"
          className={` ${
            x.productName
          } list-group-item list-group-item-action ${
            activeId === x.id ? `${x.color} active` : ""
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
