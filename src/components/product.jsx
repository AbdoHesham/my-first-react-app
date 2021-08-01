import React, { Component } from "react";
// import PropTypes from 'prop-types'
class Product extends Component {
//   state = {
//     fruit: this.props.fruit,
//   };

  //  click = (id) => {
  //     console.log(id)
  // };

  render() {
    // let state = this.state;
   let fruit= this.props.fruit
    return (
      <div className="row">
        <div className="col-2">
          <p> {fruit.name} </p>
          <p> {fruit.count} </p>

        </div>
        <div className="col">
          <button
            className="btn btn-primary "
            onClick={() => this.props.onIncrement(fruit)}
          >
            +
          </button>

          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(fruit)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
