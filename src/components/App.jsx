import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../App.css";
import NavBar from "../shared/nav-bar";
import Home from "./home";
import about from "./about";
import contact from "./contact";
import cart from "./cart";
import ProductDetails from "./productDetails";
import PageNotFound from "./404";
import Profile from "./profile";
// import SideBar from "../shared/SideBar/side-bar";

class App extends Component {
  state = {
    fruits: [
      { id: 1, name: "apple", count: 2 },
      { id: 2, name: "panana", count: 3 },
      { id: 3, name: "watermelon", count: 5 },
    ],
    count: 1,
  };

  onDeletePro = (product) => {
    // console.log(p)
    const newProducts = this.state.fruits.filter((p) => p.id !== product.id);
    this.setState({ fruits: newProducts });
  };
  onIncrementPro = (product) => {
    let newFruits = [...this.state.fruits];
    let index = newFruits.indexOf(product);
    newFruits[index] = { ...newFruits[index] };
    newFruits[index].count++;
    this.setState({ fruits: newFruits });
    // console.log(product)
  };

  onReset = () => {
    let newFruits = [...this.state.fruits];
    newFruits = newFruits.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ fruits: newFruits });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar itemCount={this.state.fruits.length} />
 
        <Switch>
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route path="/cart" component={cart} />
          <Route path="/profile" component={Profile} />


          <Route path="/404" component={PageNotFound} />

          <Route
            path="/products/:id"
            render={(props) => (
              <ProductDetails
                products={
                  this.state.fruits.filter(
                    (p) => p.id === parseInt(props.match.params.id)
                  )
                }
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/home"
            render={(props) => (
              <Home
                fruits={this.state.fruits}
                onReset={this.onReset}
                onIncrementPro={this.onIncrementPro}
                onDeletePro={this.onDeletePro}
                {...props}
              />
            )}
          />
          <Redirect from="/" to="/home" />

          <Redirect to="404" component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
