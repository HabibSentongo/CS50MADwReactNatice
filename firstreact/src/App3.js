import React from "react";
import "./styles.css";

// this is classfull with state
export default class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decreaseCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div className="App">
        <h1>Classfull with State</h1>
        <div>
          <button onClick={this.decreaseCounter.bind(this)}>
            <b>Decrease</b>
          </button>
          <button onClick={this.increaseCounter.bind(this)}>
            <b>Increase</b>
          </button>
        </div>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}
