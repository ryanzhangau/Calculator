import React, { Fragment } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { typing, clear, calc } from "../store/calcActions";

const ButtonPad = props => {
  const click = (type, label) => {
    props.typing({ type, label });
  };
  return (
    <Fragment>
      <Button className="clear" label="C" type="clear" onClick={props.clear} />
      <Button className="operator" label="√" type="self-calc" onClick={click} />
      <Button className="operator" label="^" type="self-calc" onClick={click} />
      <Button className="operator" label="/" type="operator" onClick={click} />

      <Button label="7" type="number" onClick={click} />
      <Button label="8" type="number" onClick={click} />
      <Button label="9" type="number" onClick={click} />
      <Button
        className="operator"
        label="*"
        type="operator"
        proity={1}
        onClick={click}
      />

      <Button label="4" type="number" onClick={click} />
      <Button label="5" type="number" onClick={click} />
      <Button label="6" type="number" onClick={click} />
      <Button className="operator" label="-" type="operator" onClick={click} />

      <Button label="1" type="number" onClick={click} />
      <Button label="2" type="number" onClick={click} />
      <Button label="3" type="number" onClick={click} />
      <Button className="operator" label="+" type="operator" onClick={click} />

      <Button label="." type="number" onClick={click} />
      <Button label="0" type="number" onClick={click} />
      <Button className="equal" label="=" type="equal" onClick={props.calc} />
    </Fragment>
  );
};
const mapStateToProps = null;

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
)(ButtonPad);
