import React from "react";
// import React.Fragment from "../../hoc/React.Fragment";
import {Link} from 'react-router-dom'

const item = (props) => {
  return (
    <React.Fragment>
      <div className="item-medium-1">
        <div
          className="item-medium-1__image image"
          style={{ backgroundImage: 'url("img/products/product-grey-1.jpg")' }}
        >
          <Link to="#" className="item-medium-1__action">
            Add to Cart
          </Link>
        </div>
        <Link to="#">
          <h4>{props.product.name}</h4>
          <div>
            <del>{props.product.discount}</del>
            <span className="lable">{props.product.price}</span>
          </div>
        </Link>
        <div className="crud-actions">
          <Link to={`/details/${props.product._id}`}>
            <i className="far fa-eye"></i>
          </Link>
          {localStorage.userId === props.product.userId &&(
            <React.Fragment>
              <Link to={`/edit/${props.product._id}`}>
                <i className="fas fa-edit"></i>
              </Link>
              <Link to="/"  onClick={()=>props.delete(props.product._id)} >
                <i className="fas fa-trash-alt"></i>
              </Link>
              
            </React.Fragment>
          )}
          
        </div>
      </div>
    </React.Fragment>
  );
};
export default item;