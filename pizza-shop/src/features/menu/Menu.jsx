import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <h1>
      <ul>{menu.map(pizza =>)}</ul>
    </h1>
  );
}

// loader function grabs data for useLoaderData
// named 'loader' as convention
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
