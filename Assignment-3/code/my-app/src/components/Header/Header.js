const Header = ({ employee }) => {
  return (
    <header className="header">
      <div className="arrow">{employee.arrow}</div>
      <div className="employeeDetails">
        <p className="name">{employee.name}</p>
        <p className="id">{employee.id}</p>
      </div>
      <div className="button">
        <button className="printBtn">Print</button>
      </div>
    </header>
  );
};

export default Header;
