import { TextField, ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import { fireEvent, render, screen } from "@testing-library/react";
import Field from "../Field";
import { required } from "../../Validate/Validate";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <Field
        {...props}
        component={TextField}
        inputProps={{ "data-testid": "input" }}
      />
    </ThemeProvider>
  );
};

describe("Field", () => {
  test("should render", () => {
    setup();
    const field = screen.getByTestId("input");
    expect(field).toBeInTheDocument();
  });

  test("when change, when blur, should not display error", () => {
    const onChange = jest.fn();
    const validationFn = () => undefined;
    setup({ onChange, validate: [validationFn] });
    const field = screen.getByTestId("input");
    fireEvent.change(field, { target: { value: "bar" } });
    fireEvent.blur(field);
    expect(onChange).toBeCalled();
  });

  test("when change, when blur, should display error", () => {
    const onChange = jest.fn();
    const validationFn = () => "validation failed";
    setup({ onChange, validate: [validationFn] });
    const field = screen.getByTestId("input");
    fireEvent.change(field, { target: { value: "foo" } });
    fireEvent.blur(field);
    const text = screen.queryByText("validation failed");
    expect(onChange).toBeCalled();
    expect(text).not.toBeNull();
  });
});
