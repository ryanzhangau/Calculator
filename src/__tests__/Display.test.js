import React from "react";
import { shallow } from "../enzyme";
import Display from "../components/Display";

describe("<Display />", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      display: "1+2*3-4",
      result: eval("1+2*3-4").toString()
    };
    wrapper = shallow(<Display {...props} />);
  });

  it("should render display wrap", () => {
    const elem = wrapper.find(".display");
    expect(elem).toBeDefined();
    expect(elem.length).toBe(1);
  });

  it("should render formula for displaying formula", () => {
    const elem = wrapper.find(".formula");
    expect(elem).toBeDefined();
    expect(elem.length).toBe(1);
  });

  it("should render result to display calc result", () => {
    const elem = wrapper.find(".result");
    expect(elem).toBeDefined();
    expect(elem.length).toBe(1);
  });
});
