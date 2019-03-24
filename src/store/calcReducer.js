import { doCalc, formulaStartHelper, formularEndHelper } from "./helper";
const initState = {
  display: "",
  formula: "",
  result: "",
  calculated: false,
  opHolder: ""
};

const calculate = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "TYPING":
      newState.display = newState.display.concat(action.payload.label);
      if (newState.calculated && action.payload.type !== "operator") {
        newState.calculated = false;
        newState.display = action.payload.label;
        newState.formula = "";
      }

      if (action.payload.type === "self-calc") {
        const selfCalc = formulaStartHelper(action.payload.label);
        newState.opHolder = selfCalc;
        newState.formula = newState.formula.concat(selfCalc);
      }
      if (action.payload.type === "operator") {
        if (newState.calculated) newState.calculated = false;
        if (newState.opHolder !== "") {
          newState.formula = newState.formula.concat(
            formularEndHelper(newState.opHolder)
          );
        }
        newState.opHolder = "";
      }
      if (action.payload.type !== "self-calc")
        newState.formula = newState.formula.concat(action.payload.label);
      if (
        !/^[0-9]+[.]?[0-9]*$/.test(newState.formula) &&
        newState.formula !== "" &&
        action.payload.type !== "operator" &&
        newState.opHolder === ""
      )
        newState.result = doCalc(newState.formula);
      return newState;
    case "CLEAR":
      return {
        display: "",
        formula: "",
        result: "",
        calculated: false,
        opHolder: ""
      };
    case "CALC":
      let display = "";
      if (newState.opHolder !== "")
        newState.formula = newState.formula.concat(
          formularEndHelper(newState.opHolder)
        );
      if (!newState.calculated && newState.result !== "Bad Expression")
        display = doCalc(newState.formula);
      return {
        ...newState,
        display,
        result: "",
        calculated: true,
        opHolder: ""
      };
    default:
      return state;
  }
};

export default calculate;
