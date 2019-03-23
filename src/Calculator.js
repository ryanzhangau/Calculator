import React, { Component } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import { connect } from "react-redux";
import { typing, clear, calc } from "./store/calcActions";
import "./styles/calculator.scss";

class Calculator extends Component {
  click = (type, label) => {
    this.props.typing({ type, label });
  };

  render() {
    return (
      <div className="calculator">
        <Display
          display={this.props.calcReducer.display}
          result={this.props.calcReducer.result}
        />
        <Button
          className="clear"
          label="C"
          type="clear"
          onClick={this.props.clear}
        />
        <Button
          className="operator"
          label="√"
          type="self-calc"
          onClick={this.click}
        />
        <Button
          className="operator"
          label="^"
          type="self-calc"
          onClick={this.click}
        />
        <Button
          className="operator"
          label="/"
          type="operator"
          onClick={this.click}
        />

        <Button label="7" type="number" onClick={this.click} />
        <Button label="8" type="number" onClick={this.click} />
        <Button label="9" type="number" onClick={this.click} />
        <Button
          className="operator"
          label="*"
          type="operator"
          proity={1}
          onClick={this.click}
        />

        <Button label="4" type="number" onClick={this.click} />
        <Button label="5" type="number" onClick={this.click} />
        <Button label="6" type="number" onClick={this.click} />
        <Button
          className="operator"
          label="-"
          type="operator"
          onClick={this.click}
        />

        <Button label="1" type="number" onClick={this.click} />
        <Button label="2" type="number" onClick={this.click} />
        <Button label="3" type="number" onClick={this.click} />
        <Button
          className="operator"
          label="+"
          type="operator"
          onClick={this.click}
        />

        <Button label="." type="number" onClick={this.click} />
        <Button label="0" type="number" onClick={this.click} />
        <Button
          className="equal"
          label="="
          type="equal"
          onClick={this.props.calc}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { calcReducer: state.calcReducer };
};

const mapDispatchToProps = dispach => {
  return {
    typing: number => dispach(typing(number)),
    clear: () => dispach(clear()),
    calc: () => dispach(calc())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
