const Pizza = ({ pizzaObj }) => {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.altTxt} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;
