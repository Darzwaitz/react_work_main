import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 && (
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, veniam incidunt! Cupiditate ea, animi hic quidem
            quibusdam consequuntur. Autem deleniti exercitationem soluta.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Menu;
