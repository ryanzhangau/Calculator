import React from "react";
import { shallow } from "../enzyme";
import ButtonPad from "../components/ButtonPad";
import store from "../store/store";

describe("<ButtonPad />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ButtonPad store={store} />).dive();
  });

  it("renders 19 <Button />s", () => {
    expect(wrapper.find("Button").length).toBe(19);
  });
});
