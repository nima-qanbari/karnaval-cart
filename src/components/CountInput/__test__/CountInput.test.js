import CountInput from "../CountInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <CountInput {...props} />
    </ThemeProvider>
  );
};

const focusOnInput = (placeholder = "مسافران") => {
  const input = screen.getByPlaceholderText(placeholder);
  fireEvent.focus(input);
};

describe("CountInput", () => {
  const array = [{ useDialog: false }, { useDialog: true }];

  for (let i = 0; i < array.length; i++) {
    const { useDialog } = array[i];
    describe(`given useDialog: ${useDialog}`, () => {
      test("should render", () => {
        setup();
        const container = screen.getByTestId("container");
        expect(container).toBeInTheDocument();
      });

      test("when focus on counter input, should open popper", () => {
        setup({ useDialog });
        focusOnInput();
        const popper = screen.getByTestId("popper");
        expect(popper).toBeInTheDocument();
      });

      test("when focus on input and click on plus button, should called onChange", () => {
        const onChange = jest.fn();
        setup({ useDialog, onChange, value: 5 });
        focusOnInput();
        const plusButton = screen.getByTestId("plusButton");
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(6);
      });

      test("when focus on input and click on minus button, should called onChange", () => {
        const onChange = jest.fn();
        setup({ useDialog, onChange, value: 5 });
        focusOnInput();
        const minusButton = screen.getByTestId("minusButton");
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(4);
      });

      test("when focus on input,when click on confirm button, should close popper or dialog", async () => {
        setup({ useDialog });
        focusOnInput();
        const confirmButton = screen.getByTestId("confirm");
        fireEvent.click(confirmButton);
        await sleep(300);
        const popper = screen.queryByTitle("popper");
        expect(popper).toBeNull();
      });
    });
  }
  describe("when close dialog", () => {
    test("when useDialog is true, when focus input,when click on close button should close dialog", async () => {
      setup({ useDialog: true });
      focusOnInput();
      const closeButton = screen.getByTestId("close");
      fireEvent.click(closeButton);
      await sleep(300);
      const popper = screen.queryByTitle("popper");
      expect(popper).toBeNull();
    });
  });

  test("given max, when value equal max, should not call onChange", () => {
    const onChange = jest.fn();
    setup({ max: 5, value: 5, onChange });
    focusOnInput();
    const plusButton = screen.getByTestId("plusButton");
    fireEvent.click(plusButton);
    expect(onChange).not.toHaveBeenCalled();
  });

  test("given min, when value equal min, should not call onChange", () => {
    const onChange = jest.fn();
    setup({ max: 0, value: 0, onChange });
    focusOnInput();
    const minusButton = screen.getByTestId("minusButton");
    fireEvent.click(minusButton);
    expect(onChange).not.toHaveBeenCalled();
  });
});
