import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import Carousel from "../Carousel";
import PaperCard from "../../Card/PaperCard";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <Carousel
        {...props}
        card={PaperCard}
        title="شهرهای خنک ایران برای سفرهای تابستانی"
        subtitle="مقاصد تابستانی جذاب ایران برای سفر"
        width={200}
        cardHeight={220}
        data={[
          {
            id: 1,
            img: "image",
            label: "خراسان شمالی",
            subtitle: "مقاصد تابستانی جذاب",
          },
        ]}
      />
    </ThemeProvider>
  );
};

describe("carousel", () => {
  test("should render", () => {
    setup();
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  test("when click on prev Button, should call function", () => {
    const fn = () => {
      setup();
      const prevButton = screen.getByTestId("prevButton");
      fireEvent.click(prevButton);
    };

    expect(fn).not.toThrowError();
  });

  test("when click on next Button, should call function", () => {
    const fn = () => {
      setup();
      const nextButton = screen.getByTestId("nextButton");
      fireEvent.click(nextButton);
    };

    expect(fn).not.toThrowError();
  });
});
