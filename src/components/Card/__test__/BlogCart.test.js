import {render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import BlogCart from "../BlogCart";

const setup = (props) => {
    render(
      <ThemeProvider theme={theme}>
        <BlogCart {...props} label="blog" subtitle="card" image="image"/>
      </ThemeProvider>
    );
  };

  describe("BlogCart", () => {
    test("should render", () => {
        setup()
        const blog = screen.getByTestId("blog")
        expect(blog).toBeInTheDocument()
    })
  })