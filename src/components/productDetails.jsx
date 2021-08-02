import React, { Component } from "react"
class ProductDetails extends Component {
    state={
         product :this.props.products[0]

    }
    // console.log(this.props);
    handleSave = () => {
      this.props.history.replace("/");
    };
  render() {

    return (
      <React.Fragment>
        <h1> Name : {this.state.product.name} </h1>

        <button className="btn btn-primary" onClick={this.handleSave}>
          {" "}
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
