import {render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import PaperCard from "../PaperCard"

const setup = (props) => {
    render(
      <ThemeProvider theme={theme}>
        <PaperCard {...props} title="paper" subtitle="card" width={200} cardHeight={200} image="image"/>
      </ThemeProvider>
    );
  };

  describe("BlogCart", () => {
    test("should render", () => {
        setup()
        const paperCard = screen.getByTestId("paperCard")
        expect(paperCard).toBeInTheDocument()
    })
  })