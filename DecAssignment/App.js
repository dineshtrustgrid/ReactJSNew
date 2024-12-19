import {Component} from "react";
import Counter from "./Counter";

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

export default App;