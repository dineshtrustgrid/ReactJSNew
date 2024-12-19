import { Component } from "react";


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

export default Counter ;