const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <h3 style={{ display: "inline-block" }}>
        {new Date().toLocaleDateString()}&nbsp;&nbsp;&nbsp;&nbsp;
      </h3>
      <h4 style={{ display: "inline-block" }}>
        {" "}
        {isOpen ? "We're currently open" : "We're currently closed"}
      </h4>
    </footer>
  );
};

export default Footer;
