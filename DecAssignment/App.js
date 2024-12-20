import {Component} from "react";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App JS props",props);
    this.increaseCount = this.increaseCount.bind(this);
  }

  state = { count: 0 };
  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const {countvalue}=this.state.count;
    return (
      <>
        <h1> APP Component</h1>
        <Counter initialCount={countvalue} /> 
        <button onClick={this.increaseCount}>
          
          Increment Count
        </button>
      </>
    );
  }
}

export default App;