import React, { Component } from "react";
import { Route ,Switch} from "react-router-dom";
import "../App.css";
import Nav_bar from "./nav-bar";
import Home from "./home";
import about from "./about";
import contact from "./contact";

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
      <div>
        <Nav_bar itemCount={this.state.fruits.length} />
        <Switch>
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
        </Switch>
        {/* <Home
          fruits={this.state.fruits}
          onReset={this.onReset}
          onIncrementPro={this.onIncrementPro}
          onDeletePro={this.onDeletePro}
        /> */}
      </div>
    );
  }
}

export default App;
