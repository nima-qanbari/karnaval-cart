import {render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import FullCard from "../FullCard"

const setup = (props) => {
    render(
      <ThemeProvider theme={theme}>
        <FullCard {...props} title="fullCard" width={200} cardHeight={200} image="image"/>
      </ThemeProvider>
    );
  };

  describe("BlogCart", () => {
    test("should render", () => {
        setup()
        const fullCard = screen.getByTestId("fullCard")
        expect(fullCard).toBeInTheDocument()
    })
  })