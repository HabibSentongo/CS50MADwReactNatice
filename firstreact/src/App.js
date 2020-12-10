import React from "react";
import "./styles.css";

// this is a fn  component
export function App(props) {
  return (
    <div className="App">
      <h1>Functional Component</h1>
      <h2>{props.count}</h2>
    </div>
  );
}

// this is a classfull component
export default class App2 extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Classfull Component</h1>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}
