import calcReducer from "../store/calcReducer";
import calcAction from "../store/calcActions";

const initState = {
  display: "",
  formula: "",
  result: "",
  calculated: false,
  opHolder: ""
};

describe("calculation reducer", () => {
  it("should retrun init state if does not match any type", () => {
    const newState = calcReducer(undefined, {});
    expect(newState).toMatchObject(initState);
  });

  it("should reset the state to init state if clear", () => {
    const newState = calcReducer(undefined, { type: "CLEAR", payload: "" });
    expect(newState).toMatchObject(initState);
  });

  describe("should store button label once button clicked", () => {
    it("should store numbers", () => {
      const newState = calcReducer(undefined, {
        type: "TYPING",
        payload: { type: "number", label: "1" }
      });
      expect(newState.display).toBe("1");
      expect(newState.formula).toBe("1");
    });

    it("should store operator", () => {
      const newState = calcReducer(undefined, {
        type: "TYPING",
        payload: { type: "operator", label: "+" }
      });
      expect(newState.display).toBe("+");
      expect(newState.formula).toBe("+");
    });

    it("should store self calc operator", () => {
      const newState = calcReducer(undefined, {
        type: "TYPING",
        payload: { type: "self-calc", label: "√" }
      });
      expect(newState.display).toBe("√");
      expect(newState.formula).toBe("Math.sqrt(");
    });
  });
});
