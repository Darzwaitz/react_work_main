import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are closed now - we're open @ {openHour}:00 and close @ {closeHour}
          :00
        </p>
      )}
    </footer>
  );
};

export default Footer;
