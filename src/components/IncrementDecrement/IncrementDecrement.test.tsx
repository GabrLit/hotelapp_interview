import { render, waitFor } from "@testing-library/react";
import { FilterNameTypes } from "../../context/FiltersContext";
import IncrementDecrement from "./IncrementDecrement";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("IncrementDecrement", () => {
  const onChange = vi.fn();
  const onIncrement = vi.fn();
  const onDecrement = vi.fn();

  it("clicking plus btn calls onIncrement function with correct name", async () => {
    const { getByText } = render(
      <IncrementDecrement
        name={FilterNameTypes.ADULT}
        value={0}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );

    const plusBtn = getByText("+");

    userEvent.click(plusBtn);
    await waitFor(() => expect(onIncrement).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(onIncrement).toHaveBeenCalledWith(FilterNameTypes.ADULT)
    );
  });

  it("clicking minus btn calls onDecrement function with correct name", async () => {
    const { getByText } = render(
      <IncrementDecrement
        name={FilterNameTypes.ADULT}
        value={0}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );

    const minusBtn = getByText("-");

    userEvent.click(minusBtn);
    await waitFor(() => expect(onDecrement).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(onDecrement).toHaveBeenCalledWith(FilterNameTypes.ADULT)
    );
  });

  it("typing 24 in input field calls onChange function twice with correct name", async () => {
    const e = new Event("change");
    const { getByRole } = render(
      <IncrementDecrement
        name={FilterNameTypes.ADULT}
        value={0}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );

    const input = getByRole("textbox");

    userEvent.type(input, "24");

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2));
    await waitFor(() =>
      expect(onChange).toHaveBeenCalledWith(
        expect.anything(),
        FilterNameTypes.ADULT
      )
    );
  });
});
