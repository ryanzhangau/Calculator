import React, { Component } from "react";
import Button from "./components/Button";
import "./styles/calculator.scss";

class Calculator extends Component {
  click(type, label) {
    console.log(type, label);
  }
  clear() {
    // TODO clear input
  }
  render() {
    return (
      <div className="calculator">
        <input className="display" type="text" />
        <input className="result" type="text" />

        <Button label="C" type="clear" onClick={this.clear} />
        <Button label="√" type="operation" onClick={this.click} />
        <Button label="^" type="operation" onClick={this.click} />
        <Button label="/" type="operation" onClick={this.click} />

        <Button label="7" type="number" onClick={this.click} />
        <Button label="8" type="number" onClick={this.click} />
        <Button label="9" type="number" onClick={this.click} />
        <Button label="*" type="operation" proity={1} onClick={this.click} />

        <Button label="4" type="number" onClick={this.click} />
        <Button label="5" type="number" onClick={this.click} />
        <Button label="6" type="number" onClick={this.click} />
        <Button label="-" type="operation" onClick={this.click} />

        <Button label="1" type="number" onClick={this.click} />
        <Button label="2" type="number" onClick={this.click} />
        <Button label="3" type="number" onClick={this.click} />
        <Button label="+" type="operation" onClick={this.click} />

        <Button label="." type="number" onClick={this.click} />
        <Button label="0" type="number" onClick={this.click} />
        <Button className="equal" label="=" type="equal" onClick={this.click} />
      </div>
    );
  }
}

export default Calculator;
