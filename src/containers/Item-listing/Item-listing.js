import React, { Component } from "react";
// import React.Fragment from "../../hoc/React.Fragment";
import Product from "../../components/Product/Product";
import Paging from "../../components/Paging/Paging";
import { Link } from "react-router-dom";

// import { getAll } from "../../components/Axios/Products";

class ItemListing extends Component {
  render() {
    // localStorage.removeItem("token")
    // console.log(localStorage);
    // const currentPage = parseInt(this.props.currentPage);
    // const startIndex = (currentPage - 1) * this.props.pageSize;
    // const products = this.props.products.slice(startIndex, startIndex + this.props.pageSize);
    return (
      <React.Fragment>
        <section className="item-listing">
          <div className="item-listing__tools">
            <select
              className="form-control"
              name=""
              id=""
              onChange={(event) => this.props.sort(event)}
            >
              <option value="1">Featured</option>
              <option value="2">Price low to high</option>
              <option value="3">Price high to low</option>
              <option value="4">Name</option>
            </select>
              {(localStorage.getItem('userId'))&&(

            <Link className="action-btn" to='/add-product'>
              <i className="fas fa-plus"></i>
            </Link>
              )}
          </div>
          {/* <!-- items --> */}
          <div className="item-listing__items item-listing--3items">
            {/* <!-- medium item --> */}

            {this.props.products.map((product, index) => (
              <Product key={index} delete={this.props.delete} product={product}></Product>
            ))}
          </div>
          {/* <!-- paging --> */}
          <Paging
            size={this.props.productLength}
            currentPage={this.props.currentPage}
            page={this.props.paging}
            pageSize={this.props.pageSize}
          ></Paging>
        </section>
      </React.Fragment>
    );
  }
}

export default ItemListing;
