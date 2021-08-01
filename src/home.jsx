import React, { Component } from "react";
class Home extends Component {
  state = {
    fruits: ["apple", "panana", "watermelon"],
    res:[],
    count:1
  };
  click = (num) => {
      let state=this.state
      state.res=state.fruits.push(num)

      this.setState({count: state.count+num});
    //   this.setState({fruits: state.count+state.res});
  };
  render() {
    return (
        <div className="container">
 <div>
                <ul>
        {this.state.fruits.map((fruit) => (
          <li key={fruit}>{fruit }</li>
        ))}
      </ul> 
        <button onClick={()=>this.click(2)} className="btn btn-primary">
          sadsad
        </button>
        <p>{this.state.count}</p>
      </div>
        </div>
     
    );
  }
}

export default Home;
