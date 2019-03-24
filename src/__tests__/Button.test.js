import React from "react";
import { shallow } from "../enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  let wrapper;
  const click = jest.fn();
  beforeEach(() => {
    const props = {
      label: "1",
      type: "number",
      onClick: click,
      className: ""
    };
    wrapper = shallow(<Button {...props} />);
  });

  it("should render button", () => {
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });

  it("should dispatch click event", () => {
    wrapper.find("button").simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
