import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import List from "../components/list";

describe("List", () => {
  const messages = [
    { message: "First message", priority: 1 },
    { message: "Second message", priority: 2 },
    { message: "Third message", priority: 3 },
  ];
  const component = mount(<List messages={messages} />);

  test("Render component", () => {
    expect(component.length).toEqual(1);
  });

  test("Render all messages", () => {
    const list = create(<List messages={messages} />);
    expect(list.toJSON()).toMatchSnapshot();
  });
});
