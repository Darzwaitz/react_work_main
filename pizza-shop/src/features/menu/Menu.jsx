function Menu() {
  return <h1>Menu</h1>;
}

export default function loader() {
  const menu = await getMenu();
}

export default Menu;
