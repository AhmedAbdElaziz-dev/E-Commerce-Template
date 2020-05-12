import React from "react";
// import React.Fragment from "../../../hoc/React.Fragment";
import { Link } from "react-router-dom";

const header = (props) => (
  <div className="header">
    <div className="header__upper">
      <div className="container">
        <ul className="list list--hr list--hr-separator">
          <li className="list__item">
            <span className="info">
              <i className="info__icon far fa-dot-circle"></i>
              <span className="info__data">1234 Street Name, City Name</span>
            </span>
          </li>
          <li className="list__item">
            <Link to="/" className="info">
              <i className="info__icon fab fa-whatsapp"></i>
              <span className="info__data">123-456-7890</span>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/" className="info">
              <i className="info__icon far fa-envelope"></i>
              <span className="info__data">mail@domain.com</span>
            </Link>
          </li>
        </ul>
        {/* <!-- side menu --> */}
        <ul className="list list--hr">
        { (!props.login)&&
                     
                        <React.Fragment>

                        <li className="list__item">
                          <Link to="/register" className="link">
                          {/* <!-- icon --> */}
                          <i className="link__icon fas fa-angle-right"></i>
                           {/* <!-- info --> */}
                          Regsiter
                          </Link>
                          </li>
                        <li className="list__item">
                         <Link to="/login" className="link">
                          {/* <!-- icon --> */}
                         <i className="link__icon fas fa-angle-right"></i>
                         {/* <!-- info --> */}
                          Login
                        </Link>
                         </li> 
                        </React.Fragment>    
                  }
          
           <li className="list__item">
            <Link to="/" className="link">
              {/* <!-- icon --> */}
              <i className="link__icon fas fa-angle-right"></i>
              {/* <!-- info --> */}
              Contact Us
            </Link>
          </li>
          <li className="list__item">
            <Link to="/" className="link">
              {/* <!-- icon --> */}
              <i className="link__icon fas fa-angle-right"></i>
              {/* <!-- info --> */}
              Contact Us
            </Link>
          </li>
          {/* <!-- languges --> */}
          <li className="list__item">
            {/* <!-- drop down --> */}
            {/* <!-- to oppen dropdown dropdown--opened --> */}
            <div className="dropdown ">
              {/* <!-- header --> */}
              <div className="dropdown__header">
                <Link to="/" className="link">
                  <img className="flag flag-us" src="" alt="" />
                  English
                </Link>
                <i className="fas fa-angle-down"></i>
              </div>

              {/* <!-- items --> */}
              <div className="dropdown__body">
                <ul className="dropdown__items list">
                  <li className="dropdown__item list__item">
                    <Link to="/" className="link">
                      <img className="flag flag-us" src="" alt="" />
                      English
                    </Link>
                  </li>
                  <li className="dropdown__item list__item">
                    <Link to="/" className="link">
                      <img className="flag flag-es" src="" alt="" />
                      Español
                    </Link>
                  </li>
                  <li className="dropdown__item list__item">
                    <Link to="/" className="link">
                      <img className="flag flag-fr" src="" alt="" />
                      Française
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- middle header --> */}
    <div className="header__middle container">
      {/* <!-- logo --> */}
      <Link to="#" className="header__logo-box">
        <img className="header__logo" src="img/logo.png" alt="" />
      </Link>
      {/* <!-- user options --> */}
      <div className="header__user-options">
        {/* <!-- login control --> */}
        <Link to="/login" onClick={props.Logout} className="link">
        {localStorage.getItem("token")?"Logout":"Login"}
        </Link>
        <div className="dropdown">
          <div className="dropdown__header">
            <div
              className="image image--small image--circle"
              style={{ backgroundImage: 'url("img/img1.jpg")' }}
            ></div>
          </div>
          <div className="dropdown__body"></div>
        </div>
        <div className="dropdown dropdown--left  "> 
          <div className="dropdown__header">
            <div
              className="image image--small"
              style={{ backgroundImage: 'url("img/icons/icon-cart-big.svg")' }}
            >
              <div className="notification notification--danger">1</div>
            </div>
          </div>
          <div className="dropdown__body">
            <ul className="dropdown__items list list--vr-separator">
              <li className="dropdown__item list__item">
                <div className="item-small-1">
                  <div className="item-small-1__data">
                    <Link to="" className="item-small-1__title">
                      Camera X1000
                    </Link>
                    <span className="item-small-1__description">1 X $890</span>
                  </div>
                  <div className="item-small-1__image-box">
                    <Link
                      to="#"
                      className="item-small-1__image image"
                      style={{
                        backgroundImage: 'url("img/products/product-1.jpg")',
                      }}
                    ></Link>
                    <Link to="#" className="item-small-1__action">
                      <i className="fas fa-times"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="dropdown__item list__item">
                <div className="item-small-1">
                  <div className="item-small-1__data">
                    <Link to="" className="item-small-1__title">
                      Camera X2000
                    </Link>
                    <span className="item-small-1__description">2 X $990</span>
                  </div>
                  <div className="item-small-1__image-box">
                    <Link
                      to="#"
                      className="item-small-1__image image"
                      style={{
                        backgroundImage: 'url("img/products/product-1.jpg")',
                      }}
                    ></Link>
                    <Link to="" className="item-small-1__action">
                      <i className="fas fa-times"></i>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="separator"></div>
            <div className="block">
              <span className="lable">Total:</span>
              <span className="lable">$2870</span>
            </div>
            <div className="block list list--hr">
              <Link className="list-item btn btn--gray" to="">
                View Cart
              </Link>
              <Link className="list-item btn btn--primary" to="">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__lower container">
      <nav className="nav">
        <ul className="nav__items list list--hr">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item dropdown ">
            <Link className="nav__link dropdown__header" to="#">
              Products
            </Link>
            <div className="dropdown__body">
              <ul className=" list">
                <li className="list__item">
                  <Link to="/" className="nav__inner-link">
                    Product Listing
                  </Link>
                </li>
                <li className="list__item">
                  {  (props.login) &&
                      
                        <Link to="/add-product" className="nav__inner-link">
                          Add Product
                        </Link>
                     
                  }
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="#">
              Contact Us
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="#">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default header;
