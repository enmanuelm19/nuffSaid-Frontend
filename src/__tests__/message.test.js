import React from "react";
import { mount } from "enzyme";
import Message from "../components/message";
import { PRIORITIES } from "../constants";

describe("Message", () => {
  const message = { message: "Some Test", priority: 1 };
  const deleteMessage = jest.fn();
  const component = mount(
    <Message message={message} deleteMessage={deleteMessage} />
  );

  test("Render component", () => {
    expect(component.length).toEqual(1);
  });

  test("Render message content", () => {
    expect(component.find(".MuiAlert-message").text()).toEqual(message.message);
  });

  test("Color is according to priority", () => {
    expect(component.find(".MuiAlert-root").get(0).props.style).toEqual({
      backgroundColor: PRIORITIES.find((p) => p.cod === message.priority).style,
    });
  });

  test("Check delete message", () => {
    component.find(".MuiButton-root").at(0).simulate("click");
    expect(deleteMessage).toHaveBeenCalledTimes(1);
  });
});
