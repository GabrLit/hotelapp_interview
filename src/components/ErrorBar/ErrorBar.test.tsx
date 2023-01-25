import { render } from "@testing-library/react";
import ErrorBar from "./ErrorBar";

describe("ErrorBar", () => {
  it("doesn't render when error is empty", () => {
    const { container, getByText } = render(<ErrorBar error={""} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("renders error message if not empty", () => {
    const { container } = render(<ErrorBar error={"Test error"} />);
    expect(container).toHaveTextContent("Test error");
  });
});
