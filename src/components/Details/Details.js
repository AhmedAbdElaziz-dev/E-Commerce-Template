import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { getAll } from "../../components/Axios/Products";
import {getById} from "../../components/Axios/Products"
// import Item from "../../components/Product/Product";
// import { Link } from "react-router-dom";


class ProductDetails extends Component {
  state = {
    product: {
      name: "",
      discription: "",
      price: "",
      discount: "",
      paymentType: "",
      categoryId: "",
      categoryName: "",
    },
    products: [],
  };

  async componentDidMount() {
    const productId = this.props.match.params.id;
   
    const response = await getById(productId);
    const product = response.product;
    console.log(product);
    this.setState({ product });
    
  }
  render() {
   
    return (
      <React.Fragment>
        <div className="product-details container">
          <section className="product-details__main">
            {/* <!-- images slider --> */}
            <div className="slider">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: 'url("/img/products/product-grey-7.jpg")'
                }}
              ></div>
            </div>
            {/* <!-- product info --> */}
            <div className="product-details__info">
              <h1>{this.state.product.name}</h1>
              <div className="rating">
                <div className="rating__stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="rating__data">2 reviews</div>
              </div>
              <div className="product-details__amount">
                ${ this.state.product.discount}
              </div>
              <del>{this.state.product.price}</del>
              <p className="product-details__desc">{this.state.product.discription}</p>
              <div className="product-details__add">
                <button
                
                  className="btn btn--primary"
                >
                  Add to cart
                </button>
              </div>
              {/* <div className="product-details__meta">
                Categories:{" "}
                <div className="font-weight-bold d-inline">
                  {product.categoryId.name}
                </div>
              </div> */}
            </div>
          </section>
          <section className="tabs">
            <div className="tabs__headers">
              <div className="tabs__header active">Description</div>
              <div className="tabs__header">Additional Information</div>
              <div className="tabs__header">Reviews (2)</div>
            </div>
            <div className="tabs__bodies">
              <div className="tabs__body active">
                <div className="product-details__desc">
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                    enim sapien vel nisl. Suspendisse vestibulum lobortis
                    dapibus.
                  </p>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                  </p>
                </div>
              </div>
              <div className="tabs__body ">tab2</div>
              <div className="tabs__body">tab3</div>
            </div>
          </section>
          <div className="separator"></div>
          {/* <!-- related products --> */}
          <section className="realated-product">
            {/* <h3>
              Related <strong>Products</strong>
            </h3> */}
            <div className="item-listing__items item-listing--4items">
              {/* <!-- medium item --> */}
              {/* {products.map(
                (item) =>
                  item.id !== product.id && <Item key={item.id} item={item} />
              )} */}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
