import React from "react";
import { shallow } from "../enzyme";
import Calculator from "../Calculator";
import store from "../store/store";

describe("<Calculator />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator store={store} />).dive();
  });

  it("should render calculator", () => {
    const elem = wrapper.find(".calculator");
    expect(elem.length).toBe(1);
  });

  it("should render Display component", () => {
    const elem = wrapper.find("Display");
    expect(elem.length).toBe(1);
  });

  it("should render Button Pad component", () => {
    const elem = wrapper.find("Connect(ButtonPad)");
    expect(elem.length).toBe(1);
  });
});
