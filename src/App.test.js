import TestRenderer from "react-test-renderer";
import React from "react";
import MyApp from "./App";

test("render check div existing", () => {
  const testRenderer = TestRenderer.create(<MyApp />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType("div")).toBeDefined();
});
