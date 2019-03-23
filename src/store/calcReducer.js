import { calcHelper, formulaStartHelper, formularEndHelper } from "./helper";
const initState = {
  display: "",
  formula: "",
  result: "",
  calculated: false,
  opHolder: "",
  numHolder: ""
};

const calculate = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "TYPING":
      newState.display = newState.display.concat(action.payload.label);
      if (newState.calculated && action.payload.type !== "operator") {
        newState.calculated = false;
        newState.display = action.payload.label;
      }

      if (action.payload.type === "self-calc") {
        const selfCalc = formulaStartHelper(action.payload.label);
        newState.opHolder = selfCalc;
        newState.formula = newState.formula.concat(selfCalc);
      }
      if (action.payload.type === "operator") {
        if (newState.opHolder !== "") {
          newState.formula = newState.formula.concat(
            formularEndHelper(newState.opHolder)
          );
        }
        newState.opHolder = "";
      }
      if (action.payload.type !== "self-calc")
        newState.formula = newState.formula.concat(action.payload.label);
      console.log(newState.formula);
      if (
        !/^[0-9]+[.]?[0-9]*$/.test(newState.formula) &&
        newState.formula !== "" &&
        action.payload.type !== "operator" &&
        newState.opHolder === ""
      )
        newState.result = calcHelper(newState.formula);
      return newState;
    case "CLEAR":
      return {
        display: "",
        formula: "",
        result: "",
        calculated: false,
        opHolder: "",
        numHolder: ""
      };
    case "CALC":
      let display = "";
      if (newState.opHolder !== "")
        newState.formula = newState.formula.concat(
          formularEndHelper(newState.opHolder)
        );
      if (!newState.calculated && newState.result !== "Bad Expression")
        display = calcHelper(newState.formula);
      return {
        ...newState,
        display,
        formula: "",
        result: "",
        calculated: true,
        opHolder: "",
        numHolder: ""
      };
    default:
      return state;
  }
};

export default calculate;
