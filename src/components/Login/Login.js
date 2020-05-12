import React, { Component } from "react";
// import React.Fragment from "../../hoc/React.Fragment";
import { Link } from "react-router-dom";
import {userLogin} from '../Axios/User'
class Login extends Component {

    state={
        user:{
            userName:'',
            password:''
        }
    }

   changeHandler =(event)=>{
       const{name,value} =event.target;
       const changedInput = {[name]:value};
       const user = {...this.state.user,...changedInput}
       this.setState({user})

   }
    loginHandler= async(event)=>{
    event.preventDefault();
    
    const user = {...this.state.user}
    console.log(user) 
    const response = await userLogin(user)
    window.localStorage.setItem("token",response.data.token)
    window.localStorage.setItem("userId",response.data.user._id)
    this.props.loginHandler(true);
   if(window.localStorage.length) this.props.history.push('/')
   }

  render() {
    return (
      <div className="container">
        <form className="login" onSubmit={this.loginHandler}>
          <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
          <div className="form-group">
            <label htmlFor="">Username or E-mail Address</label>
            <input className="form-control" type="text"  name="userName"  onChange={this.changeHandler} id="" />
          </div>
          <div className="form-group login__Password">
            <Link to="#" className="login__forget-password">
              (Forget Password?)
            </Link>
            <label htmlFor="">Password</label>
            <input className="form-control" type="password" name="password"  onChange={this.changeHandler}id="" />
          </div>
          <div className="login__remember-me">
            <div className="form-group__checkbox">
              <input type="checkbox" name="" id="" />
              <span>Remember Me</span>
            </div>
            <div className="add-product__actions">
              <button to="#" className="btn btn--gray">
                Cancel
              </button>
              <button to="/" className="btn btn--primary">
                Login
              </button>
            </div>
          </div>
          <Link to="#" className="login__register-now">
            Register Now
          </Link>
        </form>
      </div>
    );
  }
}
export default Login;
