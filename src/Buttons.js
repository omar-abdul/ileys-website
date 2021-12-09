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
<<<<<<< HEAD
            activeId === x.id ? "active" : ""
=======
            activeId === x.id ? `${x.color} active` : ""
>>>>>>> 5491111f37f210d9c52841a61bc900fdd8c2267c
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
