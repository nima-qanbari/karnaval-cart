import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import PassengerDetail from "../PassengerDetail";
import { render, screen } from "@testing-library/react";
import { Form } from "react-final-form";

const setup = (props) => {
  const onSubmit = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Form onSubmit={onSubmit} render={() => <PassengerDetail {...props} />} />
    </ThemeProvider>
  );
};

describe("PassengerDetail", () => {
  test("should render", () => {
    setup();

    const containerDiv = screen.getByTestId("PaperContainer");
    expect(containerDiv).toBeInTheDocument();
  });
});
