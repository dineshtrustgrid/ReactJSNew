// import {Component} from "react";

// import ReactDOM from "react-dom/client";

// class PersonComponent extends Component{

//     constructor(props){
//         super(props);

//     }

//     render(){

//         return (
//             <>
//                 <h1> personComponent </h1>
//                 <h2>ID : {this.props.id}</h2>
//                 <h3> Name : {this.props.uname}</h3>
//             </>
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<PersonComponent id={124} uname="Vinod Gowda"/>);

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedstateFrom props");
    if (props.initialCount !== state.count) {
      return { count: props.initialCount };
    }
    return null;
  }

  render() {
    console.log(" Render ");
    return (
      <>
        <h1> Counter value : {this.state.count}</h1>
      </>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
  }
  
  state = { count: 0 };
  
  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1> APP Component</h1>
        <Counter initialCount={this.state.count} />
        <button onClick={this.increaseCount}>
          
          Increment Count
        </button>
      </>
    );
  }
}

//export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
