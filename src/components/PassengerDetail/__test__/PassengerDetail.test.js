import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import PassengerDetail from "../PassengerDetail";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <PassengerDetail {...props} />
    </ThemeProvider>
  );
};

describe("PassengerDetail", () => {
  test("should render", () => {
    setup();
    const containerDiv = screen.getByTestId("container");
    expect(containerDiv).toBeInTheDocument();
  });

  test("when user type in input should call onChange", () => {
    setup();
    const inputField = screen.getByLabelText("نام");
    fireEvent.change(inputField, { target: { name: "name", value: "ali" } });
    expect(inputField.value).toBe("ali");
  });
});
