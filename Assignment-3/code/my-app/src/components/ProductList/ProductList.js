import "./ProductList.css";

const ProductList = ({ employee }) => {
  return (
    <div className="productList">
      <div>
        <label className="checkbox">
          <input type="checkbox"></input>
        </label>
      </div>
      <div className="image">
        <img src={employee.profileImg} alt="" />
      </div>
      <div className="description">
        <p>{employee.role}</p>
        <p>{employee.work}</p>
      </div>
      <div className="arrow1">
        <p>{employee.arrow1}</p>
      </div>
    </div>
  );
};

export default ProductList;
