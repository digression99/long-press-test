import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ClassComponent extends Component {
  constructor() {
    super();
    console.log("constructor.");

    this.state = {
      foo: 10,
      bar: 20
    };
  }

  arrowFunction = () => {
    console.log("this is arrow function.");
    return (
      <div>
        <div>foo : {this.state.foo}</div>
      </div>
    );
  };

  functionFunction() {
    console.log("this is function function.");
    return <div>bar : {this.state.bar}</div>;
  }

  render() {
    return (
      <div>
        <div>{this.arrowFunction()}</div>
        <div>{this.functionFunction()}</div>
        <ChildComponent
          arrowFunction={this.arrowFunction}
          functionFunction={this.functionFunction.bind(this)}
        />
      </div>
    );
  }
}
