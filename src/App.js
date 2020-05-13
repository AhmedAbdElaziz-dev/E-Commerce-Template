import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
// import React.Fragment from "./hoc/React.Fragment";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import AddProduct from "./components/Add-Product/Add-product";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";
import Details from "./components/Details/Details";

class App extends Component {
  state = {
    products: [],
    islogged: "",
  };
  componentDidMount = () => {
    const islogged = localStorage.userId ? true : false;
    this.setState({ islogged });
  };
  loginHandler = (loginStatus) => {
    const islogged = loginStatus;
    this.setState({ islogged });
  };

  render() {
    // localStorage.removeItem("token")
    return (
      <BrowserRouter>
        <Header login={this.state.islogged}></Header>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} islogged={this.state.islogged}></Home>
            )}
          ></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Redirect path="/home" to="/"></Redirect>
          <Route
            path="/login"
            render={(props) => {
              return (
                <Login {...props} loginHandler={this.loginHandler}></Login>
              );
            }}
          ></Route>
          <Route path="/edit/:id" component={AddProduct}></Route>
          <Route
            path="/add-product"
            render={(props) => {
              if (window.localStorage.length) return <AddProduct {...props} />;
              return <Login {...props} />;
            }}
          ></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
