import React, { Component } from "react";
import Product from "./product";
class Home extends Component {


  render() {
    // let itemCount
    return (
      <React.Fragment>
        <div className="container">
          <button className="btn btn-secondary" onClick={this.props.onReset}>
            reset
          </button>
          
            {this.props.fruits.map((fruit) => (
              <Product
                key={fruit.id}
                fruit={fruit}
                onDelete={this.props.onDeletePro}
                onIncrement={this.props.onIncrementPro}
              />
            ))}
         

          <p>{this.props.count}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
