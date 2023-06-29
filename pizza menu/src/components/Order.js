const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We're open until {closeHour}:00. &nbsp;&nbsp; Please drop in or Order
        online:
      </p>
      <button className="btn">Order</button>
      <p>we re-open tomorrow @ {openHour}</p>
    </div>
  );
};

export default Order;
