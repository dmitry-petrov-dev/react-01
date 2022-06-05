import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    expect(instance.props.status).toBe("test-status");
  });
  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    expect(instance.findByType("span")).toBeDefined();
  });
  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    expect(instance.findByType("input")).toBeUndefined();
  });

  test("after creation span with correct status should be displayed", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    expect(instance.findByType("span").children[0]).toEqual("test-status");
  });

  test("input should be displayed in editMode instead of", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");

    expect(input.props.value).toEqual("test-status");
  });
});
