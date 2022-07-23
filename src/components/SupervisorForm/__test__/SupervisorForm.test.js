import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import SupervisorForm from "../SupervisorForm";
import { render, screen } from "@testing-library/react";
import { Form } from "react-final-form";

const setup = (props) => {
  const onSubmit = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Form onSubmit={onSubmit} render={() => <SupervisorForm {...props} />} />
    </ThemeProvider>
  );
};

describe("supervisorFrom", () => {
    test("should render", () => {
        setup()
        const containerDiv = screen.getByTestId("supervisorContainer")
        expect(containerDiv).toBeInTheDocument()
    })
})