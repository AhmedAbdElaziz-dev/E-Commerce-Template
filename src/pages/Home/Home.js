import React, { Component } from "react";
import Fillter from "../../components/Fillter/Fillter";
import ItemListing from "../../containers/Item-listing/Item-listing";
import { getAll } from "../../components/Axios/Products";
import { productsHandler } from "../../components/Axios/Products";
import { deleteProduct } from "../../components/Axios/Products";
class Home extends Component {
  state = {
    products: [],
    productLength: "",
    selectedCategoryId: "",
    sortType: "",
    searchValue: "",
    currentPage: "1",
    pageSize: "4",
  };

  async componentDidMount() {
    // const currentPage = this.state.currentPage;
    // const pageSize = this.state.pageSize;
    const response = await getAll( this.state.currentPage,  this.state.pageSize);
    const productLength = response.productLength;
    const products = response.products;
    this.setState({ products, productLength });
  }
  // async componentDidUpdate() {

  //     const response = await productsHandler(
  //       this.state.selectedCategoryId,
  //       this.state.sortType,
  //       this.state.searchValue
  //     );
  //     const products = response.products;
  //     this.setState({ products });
  //   }

  // shouldComponentUpdate(nextprops, nextState) {
  //   // if (nextState.products.length === this.state.products.length){
  //     if(
  //       nextState.products.length !== this.state.products.length ||
  //       nextState.sortType !== this.state.sortType||
  //       nextState.selectedCategoryId !== this.state.selectedCategoryId||
  //       nextState.searchValue !== this.state.searchValue ||
  //       nextState.currentPage !== this.state.currentPage
  //       )

  //         return true;

  //   return false;
  // }

  searchHandler = async (event) => {
  
    const searchValue = event.target.value;
  
    const response = await productsHandler(
      this.state.selectedCategoryId,
      this.state.sortType,
      searchValue,
    this.state.currentPage,
      this.state.pageSize
    );
    const products = response.products;
    const productLength = response.productLength;
    this.setState({ products, searchValue, productLength });
  };
  sortHandler = async (event) => {
    const sortType = event.target.value;
    const currentProducts = [...this.state.products]
    const response = await productsHandler(
      this.state.selectedCategoryId,
      sortType,
      this.state.searchValue,
     1,
      this.state.pageSize,
      currentProducts
    );
    const products = response.products;
    this.setState({ products, sortType });
  };
  pagingHandler = async (event) => {
    const { id } = event.target;
    const currentPage = id;
    // const currentProducts = [...this.state.products]
    // const response = await pageinghandler(currentPage, this.state.pageSize,currentProducts);
    const response = await productsHandler(
      this.state.selectedCategoryId,
      this.state.sortType,
      this.state.searchValue,
      currentPage,
      this.state.pageSize
    );
    const products = response.products;
    this.setState({ products, currentPage });
  };
  categoryHandler = async (id) => {
    const selectedCategoryId = id;
    let response;
    selectedCategoryId
      ? (response = await productsHandler(
          selectedCategoryId,
          this.state.sortType,
          this.state.searchValue,
          this.state.currentPage,
          this.state.pageSize
        ))
      : (response = await getAll(this.state.currentPage,  this.state.pageSize));
    const products = response.products;
    const productLength = response.productLength;
    this.setState({ products, selectedCategoryId, productLength });
  };
  deleteHandler = async (id) => {
    const response = await deleteProduct(id);
    const products = response.products;
    this.setState({ products });
  };
  render() {
    const products = [...this.state.products];
    return (
      <div className="container">
        <Fillter
          search={this.searchHandler}
          categoryFilter={this.categoryHandler}
          products={products}
        ></Fillter>
        <ItemListing
          islogged={this.props.islogged}
          products={products}
          delete={this.deleteHandler}
          sort={this.sortHandler}
          paging={this.pagingHandler}
          productLength={this.state.productLength}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
        ></ItemListing>
      </div>
    );
  }
}

export default Home;
