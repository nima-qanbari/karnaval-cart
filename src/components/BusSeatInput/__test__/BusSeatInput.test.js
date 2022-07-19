import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import BusSeatInput from "../BusSeatInput";
import { fireEvent, render, screen } from "@testing-library/react";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <BusSeatInput {...props} />
    </ThemeProvider>
  );
};

describe("BusSeatInput", () => {
  const array = [{ vertical: true }, { vertical: false }];

  for (let i = 0; i < array.length; i++) {
    const { vertical } = array[i];

    test("should render", () => {
      setup({
        vertical,
        data: [
          {
            seats: [
              { seatNumber: 1, status: "male" },
              { seatNumber: 4, status: "available" },
              { seatNumber: 7, status: "available" },
              { seatNumber: 10, status: "available" },
              null,
              null,
              { seatNumber: 15, status: "unavailable" },
              { seatNumber: 18, status: "available" },
              { seatNumber: 21, status: "available" },
              { seatNumber: 24, status: "available" },
            ],
          },
        ],
      });
      const containerDiv = screen.getByTestId("container");
      expect(containerDiv).toBeInTheDocument();
    });

    test("given available seat, when click on seat should call onChange", () => {
      const onChange = jest.fn();
      setup({
        vertical,
        data: [
          {
            seats: [{ seatNumber: 1, status: "available" }],
          },
        ],
        onChange,
      });

      const seat = screen.getByTestId("seat");
      fireEvent.click(seat);
      expect(onChange).toBeCalled();
    });
    test("given unavailable seat, when click on seat should call onChange", () => {
      const onChange = jest.fn();
      setup({
        vertical,
        data: [
          {
            seats: [{ seatNumber: 1, status: "unavailable" }],
          },
        ],
        onChange,
      });

      const seat = screen.getByTestId("seat");
      fireEvent.click(seat);
      expect(onChange).not.toBeCalled();
    });
    test("given female seat, when click on seat should call onChange", () => {
      const onChange = jest.fn();
      setup({
        vertical,
        data: [
          {
            seats: [{ seatNumber: 1, status: "female" }],
          },
        ],
        onChange,
      });

      const seat = screen.getByTestId("seat");
      fireEvent.click(seat);
      expect(onChange).not.toBeCalled();
    });

    test("when click on item, should change to active", () => {
      const onChange = jest.fn();
      setup({
        vertical,
        data: [
          {
            seats: [{ seatNumber: 1, status: "available" }],
          },
        ],
        onChange,
        value: 1,
      });

      const seat = screen.queryByTestId("seat active");
      expect(seat).not.toBeNull();
    });
  }
});
