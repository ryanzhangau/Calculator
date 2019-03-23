const MATH_OP_MAP = {
  "√": "Math.sqrt(",
  "^": "Math.pow("
};

const MATH_END_MAP = {
  "Math.sqrt(": ")",
  "Math.pow(": ",2)"
};

export const formulaStartHelper = operator => {
  return `${MATH_OP_MAP[operator]}`;
};

export const formularEndHelper = operator => {
  return `${MATH_END_MAP[operator]}`;
};

export const doCalc = formula => {
  let res = "";
  try {
    res = eval(formula).toString();
  } catch (e) {
    res = "Bad Expression";
    console.error(`${formula} is a bad expession, error: ${e}`);
  }
  return res;
};
