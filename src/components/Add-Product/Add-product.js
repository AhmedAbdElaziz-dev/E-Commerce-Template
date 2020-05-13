import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../Axios/Categories";
// import { addProduct } from "../Axios/Products";
import { getById,addProduct,uploadImage } from "../Axios/Products";
class AddProduct extends Component {
  state = {
    product: {
      name: "",
      discription: "",
      price: "",
      status: "",
      discount: "",
      paymentType: "",
      categoryId: "",
      categoryName: "",
      imageUrl: "",
    },
    categories: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(id);
    const response = await getAll();
    const categories = response.categories;

    this.setState({ categories });

    if (id) {
      const response = await getById(id);
      const product = response.product;
      const categoryName = product.categoryId.name;
      this.setState({ product, categoryName });
    }
  }
  imageHandler = async (event) => {
    // const imageUrl = event.target.files[0];
    const image = event.target.files[0]
    const formData = new FormData();
    formData.set("image",image)
    const response = await uploadImage(formData)
    const imageUrl = response.imageUrl
    console.log(imageUrl)
    const product = { ...this.state.product, imageUrl };
    this.setState({ product });
  };
  changeHandler = (event) => {
    let { name, value } = event.target;
    if (name === "price" || name === "discount") {
      value = parseInt(value);
    }
    const changedInput = { [name]: value };
    const product = { ...this.state.product, ...changedInput };
    this.setState({ product });
  };
  addHandler = async (event) => {

    event.preventDefault();
    
    const id = this.props.match.params.id;
    const product = { ...this.state.product };
    const response = await addProduct(product, id,);
    if (response.product) {
      this.props.history.push("/");
    }
  };

  paymenTypeHandler = (event) => {
    const { checked, name } = event.target;
    console.log(event.target.checked);
    if (checked) {
      const paymentType = name;
      const product = { ...this.state.product, paymentType };
      this.setState({ product });
    } else {
      const paymentType = "";
      const product = { ...this.state.product, paymentType };
      this.setState({ product });
    }
  };
  statusHandler = (event) => {
    const { checked, name } = event.target;
    console.log(checked);
    if (checked) {
      const status = name;
      const product = { ...this.state.product, status };
      this.setState({ product });
    } else {
      const status = "";
      const product = { ...this.state.product, status };
      this.setState({ product });
    }
  };
  categoryHandler = (event) => {
    const { value } = event.target;
    const categoryId = value;
    console.log(this.props);
    const product = { ...this.state.product, categoryId };
    this.setState({ product });
  };
  render() {
    const categoryName = this.state.categoryName;
console.log(this.state.product.imageUrl)
    return (
      <div className=" container">
        <form className="add-product" action="" onSubmit={this.addHandler}>
          <div className="add-product__images slider">
            <div className="add-product__image-actions">
              <div className="add-product__image-action">
                <Link to="#">
                  <i className="fas fa-plus-square"></i>
                </Link>
                <input
                  type="file"
                  name="image"
                  id="image"
                  style={{ display: "none" }}
                  onChange={this.imageHandler}
                ></input>
                <label htmlFor="image" className="fas fa-edit"></label>
                {/* </Link> */}
                <Link>
                  <i className="fas fa-trash-alt"></i>
                </Link>
              </div>
            </div>
            <div className="slider__items">
              <div
                className="slider__item active"
                style={{
                  backgroundImage: `url("http://localhost:2000/${this.state.product.imageUrl}")`,
                }}
              ></div>
              {/* <div
                className="slider__item"
                style={{
                  backgroundImage: 'url("img/products/product-grey-7.jpg")',
                }}
              ></div>
              <div
                className="slider__item"
                style={{
                  backgroundImage: 'url("img/products/product-grey-7.jpg")',
                }}
              ></div>*/}
            </div>
            <div className="slider__indicators">
              <span className="slider__indicator active"></span>
              <span className="slider__indicator"></span>
              <span className="slider__indicator"></span>
            </div>
          </div>
          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group invalid">
                      <label>Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        id=""
                        value={this.state.product.name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        name="discription"
                        value={this.state.product.discription}
                        onChange={this.changeHandler}
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                <label>Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  onChange={this.changeHandler}
                  value={this.state.product.price}
                  id=""
                />
              </div>
              <div className="add-product__discount">
                <div className="form-group">
                  <label>Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input
                        type="radio"
                        name="OnSale"
                        id=""
                        onClick={this.statusHandler}
                        checked={this.state.product.status === "OnSale"}
                      />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input
                        type="radio"
                        name="NotOnSale"
                        id=""
                        onClick={this.statusHandler}
                        checked={this.state.product.status === "NotOnSale"}
                      />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Discount</label>
                  <input
                    className="form-control"
                    type="text"
                    name="discount"
                    onChange={this.changeHandler}
                    value={this.state.product.discount}
                    id=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Payment Types</label>
                <div className="form-group__checkboxs">
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="DirectBankTransfare"
                      id=""
                      checked={
                        this.state.product.paymentType === "DirectBankTransfare"
                      }
                      onClick={this.paymenTypeHandler}
                    />
                    <span>Direct Bank Transfare</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="ChequePayment"
                      id=""
                      checked={
                        this.state.product.paymentType === "ChequePayment"
                      }
                      onClick={this.paymenTypeHandler}
                    />
                    <span>Cheque Payment</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="Paypal"
                      id=""
                      onClick={this.paymenTypeHandler}
                      checked={this.state.product.paymentType === "Paypal"}
                    />
                    <span>Paypal</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="Visa"
                      id=""
                      onClick={this.paymenTypeHandler}
                      checked={this.state.product.paymentType === "Visa"}
                    />
                    <span>Visa</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="Mastercard"
                      id=""
                      onClick={this.paymenTypeHandler}
                      checked={this.state.product.paymentType === "Mastercard"}
                    />
                    <span>Mastercard</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input
                      type="checkbox"
                      name="Dilivery"
                      id=""
                      onClick={this.paymenTypeHandler}
                      checked={this.state.product.paymentType === "Dilivery"}
                    />
                    <span>On Dilivery</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  className="form-control"
                  name="category"
                  id=""
                  onChange={this.categoryHandler}
                >
                  {this.state.categories.map((category, index) =>
                    categoryName === category.name ? (
                      <option key={index} selected value={category._id}>
                        {category.name}
                      </option>
                    ) : (
                      <option key={index} value={category._id}>
                        {category.name}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="taged-textbox form-group">
                <label className="taged-textbox__lable">Tags</label>
                <input
                  className="taged-textbox__textbox form-control"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="add-product__actions">
                <Link to="/" className="btn btn--gray">
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn--primary"
                  onClick={this.addHandler}
                >
                  {this.props.match.params.id ? "edit" : "add"}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddProduct;
