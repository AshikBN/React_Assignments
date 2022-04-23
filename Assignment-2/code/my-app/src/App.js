import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Image from "react-bootstrap/Image";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className="profile">
        <Image className="profileImg" src={employee.profileImg} />
        <h1 className="profileName">{employee.name}</h1>
        <label className="location">Location</label>
        <p className="profileLocation">{employee.location}</p>
        <label className="bloodGroup">Blood Group</label>
        <p className="profileBloodGroup">{employee.bloodGroup}</p>
        <label className="age">Age</label>
        <p className="profileAge">{employee.age}</p>
      </div>
    </div>
  );
}

export default App;
