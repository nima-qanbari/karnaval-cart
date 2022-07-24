import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "../../../theme/default";
import { ThemeProvider } from "@material-ui/core";
import Checkout from "../Checkout";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <Checkout
        cancellationRules={[
          "از زمان صدور تا ۹۰ دقیقه قبل از حرکت | استرداد آنلاین",
        ]}
        data={[{ label: "نام تعاونی", value: "شرکت زاگرس" }]}
        totalPrice={9000}
        {...props}
      />
    </ThemeProvider>
  );
};

describe("checkout", () => {
  test("should render for single passenger", () => {
    const fn = () =>
      setup({
        passengers: [
          {
            name: "نیما",
            family: "قنبری",
            gender: "male",
            nationalCode: "3242047672",
            seatNumber: "8",
            price: 169000,
          },
        ],
      });
    expect(fn).not.toThrowError();
  });

  test("should render for multi passenger", () => {
    const fn = () =>
      setup({
        passengers: [
          {
            name: "نیما",
            family: "قنبری",
            gender: "male",
            nationalCode: "3242047672",
            seatNumber: "8",
            price: 169000,
          },
          {
            name: "مرجان",
            family: "قنبری",
            gender: "female",
            nationalCode: "3242047672",
            seatNumber: "8",
            price: 169000,
          },
        ],
      });
    expect(fn).not.toThrowError();
  });

  test("when click on checkbox, should disabled button", () => {
    setup({
      passengers: [
        {
          name: "نیما",
          family: "قنبری",
          gender: "male",
          nationalCode: "3242047672",
          seatNumber: "8",
          price: 169000,
        },
      ],
    });

    const checkbox = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
  });
});
