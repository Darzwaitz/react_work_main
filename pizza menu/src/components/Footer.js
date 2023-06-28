const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHour}:00. &nbsp;&nbsp; Please drop in or
            Order online:
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
