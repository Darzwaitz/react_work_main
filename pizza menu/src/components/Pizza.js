const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.altTxt} />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
    </div>
  );
};

export default Pizza;
