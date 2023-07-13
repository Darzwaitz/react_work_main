export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items...</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "Everything packed!"
          : ` You have ${numItems} item${
              numItems === 1 ? "" : "s"
            } on your list...and
        you have packed 
        ${numPacked} item${numPacked === 1 ? "" : "s"} - (
        ${percentPacked ? percentPacked : 0}%)`}
      </em>
    </footer>
  );
}
