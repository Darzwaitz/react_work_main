const Pizza = (props) => {
  const pizza = props.pizzaObj;
  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.altTxt} />
      <div>
        <h1>{pizza.name}</h1>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;
