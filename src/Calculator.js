import React, { Component } from "react";
import ButtonPad from "./components/ButtonPad";
import Display from "./components/Display";
import { connect } from "react-redux";

import "./styles/calculator.scss";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display
          display={this.props.calcReducer.display}
          result={this.props.calcReducer.result}
        />
        <ButtonPad />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { calcReducer: state.calcReducer };
};

export default connect(mapStateToProps)(Calculator);
