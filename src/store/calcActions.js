export const typing = button => {
  return { type: "TYPING", payload: button };
};

export const clear = () => {
  return { type: "CLEAR", payload: "" };
};

export const calc = () => {
  return { type: "CALC", payload: "" };
};
