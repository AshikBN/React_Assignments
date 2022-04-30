import "./OrderInfo.css";

const OrderInfo = ({ employee }) => {
  return (
    <div className="OrderInfo">
      <div className="status">
        <p>Status</p>

        <p>{employee.status}</p>
      </div>
      <div className="door">
        <p>Door</p>
        <p>{employee.door}</p>
      </div>
      <div className="time">
        <p>Time</p>
        <p>{employee.time}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
