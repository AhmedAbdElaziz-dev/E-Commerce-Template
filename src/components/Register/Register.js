import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../Axios/User";

class Register extends Component {

  state = {
        user: {
          userName: "",
          password: "",
        },
  };
  
  changeHandler = (event) => {
    const { value, name } = event.target;
    const changedInput = { [name]: value };
    const user = { ...this.state.user, ...changedInput };
    this.setState({ user });
  };
  registerHandler = async (event) => {
    event.preventDefault();
    const user = {...this.state.user};
    const response = await addUser(user);
    console.log(response)

    if(response.data.user){
      this.props.history.push('/')
    }
  };
  render() {
    return (
      <div className="container">
        <form className="login" onSubmit={this.registerHandler}>
          <h4 className="login__header">Register An Account</h4>
          <div className="form-group">
            <label for="">UserName</label>
            <input
              className="form-control"
              value={this.state.user.userName}
              onChange={this.changeHandler}
              type="text"
              name="userName"
              id=""
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="">Password</label>
              <input
                className="form-control"
                value={this.state.user.paassword}
                onChange={this.changeHandler}
                type="password"
                name="password"
                id=""
              />
            </div>
            {/* <div className="form-group">
              <label for="">Re-enter Password</label>
              <input className="form-control" type="text" name="" id="" />
            </div> */}
          </div>

          <div className="login__remember-me">
            <div className="add-product__actions">
              <button to="#" className="btn btn--gray">
                Cancel
              </button>
              <button to="#" className="btn btn--primary">
                Register
              </button>
            </div>
          </div>
          <Link to="/login" className="login__register-now">
            You are alredy a member?
          </Link>
        </form>
      </div>
    );
  }
}
export default Register;
