import React from "react";
import { mount } from "enzyme";
import MessageGrid from "../components/message-grid";
import { create } from "react-test-renderer";
import { PRIORITIES } from "../constants";

describe("MessageGrid", () => {
  const messages = [
    { message: "First message", priority: 1 },
    { message: "Second message", priority: 2 },
    { message: "Third message", priority: 3 },
  ];

  const component = mount(<MessageGrid message={messages[0]} />);

  test("Render component", () => {
    expect(component.length).toEqual(1);
  });

  test("Render new message", () => {
    component.setProps({ message: messages[1] });
    const grid = create(component);
    expect(grid.toJSON()).toMatchSnapshot();
  });

  test("Render priorities lists", () => {
    expect(component.getDOMNode().childElementCount).toEqual(PRIORITIES.length);
  });
});
