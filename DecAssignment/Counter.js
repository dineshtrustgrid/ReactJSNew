import { Component } from "react";


class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("counter JS ", props);
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

    const {value}=this.state.count
    console.log(" Render ");
    return (
      <>
        <h1> Counter value : {value}</h1>
      </>
    );
  }
}

export default Counter ;