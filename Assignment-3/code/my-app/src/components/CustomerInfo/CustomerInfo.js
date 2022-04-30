const CustomerInfo = ({ employee }) => {
  return (
    <div className="customerInfo">
      <div>
        <p className="appointment">Appointment</p>
        <span className="appointmentTime">{employee.appointment}</span>
      </div>
      <div>
        <p className="email">Email:</p>
        <span className="emailId">{employee.email}</span>
      </div>
      <div>
        <p className="phone">Phone:</p>
        <span className="phoneNo">{employee.phone}</span>
      </div>
    </div>
  );
};

export default CustomerInfo;
