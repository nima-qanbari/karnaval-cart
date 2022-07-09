/* eslint-disable testing-library/no-render-in-setup */
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import OriginDestinationInput from "../OriginDestinationInput";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("OriginDestinationInput", () => {
  describe("render no props", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput />
        </ThemeProvider>
      );
    });

    it("should render", () => {
      const containerDiv = screen.getByTitle("container");
      expect(containerDiv).toBeInTheDocument();
    });

    it("when focus on origin input, should open popper", () => {
      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);
      const paper = screen.getByTitle("paper");
      expect(paper).toBeInTheDocument();
    });

    it("when focus on destination input, should open popper", () => {
      const destinationInput = screen.getByPlaceholderText("مقصد");
      fireEvent.focus(destinationInput);
      const paper = screen.getByTitle("paper");
      expect(paper).toBeInTheDocument();
    });
  });

  describe("given loading", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput loading={true} />
        </ThemeProvider>
      );
    });

    it("when focus on input, when loading should display loading", () => {
      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);
      const loading = screen.getByTitle("loading");
      expect(loading).toBeInTheDocument();
    });
  });

  describe("given origin items", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            originItems={[
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]}
          />
        </ThemeProvider>
      );
    });
    it("given origin items when focus, should display originItems", () => {
      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);
      const originItem = screen.getAllByTitle("originItem");
      expect(originItem.length).toBeGreaterThan(0);
    });
  });
  describe("given destination items", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            destinationItems={[
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
            ]}
          />
        </ThemeProvider>
      );
    });
    it("given origin items when focus, should display originItems", () => {
      const destinationInput = screen.getByPlaceholderText("مقصد");
      fireEvent.focus(destinationInput);
      const destinationItem = screen.getAllByTitle("destinationItem");
      expect(destinationItem.length).toBeGreaterThan(0);
    });
  });

  describe("when click on item", () => {
    test("should call onChange prop", () => {
      const onChangeOrigin = jest.fn();
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangeOrigin={onChangeOrigin}
            originItems={[
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]}
          />
        </ThemeProvider>
      );

      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);
      const originItems = screen.getAllByTestId("id-1");
      fireEvent.click(originItems[0]);
      expect(onChangeOrigin).toBeCalled();
    });

    test("when destination input don't have value should focus on destination input", () => {
      const onChangeOrigin = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangeOrigin={onChangeOrigin}
            originItems={[
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]}
          />
        </ThemeProvider>
      );

      const originInput = screen.getByPlaceholderText("مبدا");
      const destinationInput = screen.getByPlaceholderText("مقصد");
      jest.spyOn(destinationInput, "focus");

      fireEvent.focus(originInput);

      const originItems = screen.getAllByTestId("id-1");
      fireEvent.click(originItems[0]);

      expect(destinationInput.focus).toHaveBeenCalled();
    });

    test("when origin input don't have value should focus on origin input", () => {
      const onChangeDestination = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangeDestination={onChangeDestination}
            destinationItems={[
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
            ]}
          />
        </ThemeProvider>
      );

      const originInput = screen.getByPlaceholderText("مبدا");
      const destinationInput = screen.getByPlaceholderText("مقصد");
      jest.spyOn(originInput, "focus");

      fireEvent.focus(destinationInput);

      const destinationItems = screen.getAllByTestId("id-2");
      fireEvent.click(destinationItems[0]);

      expect(originInput.focus).toHaveBeenCalled();
    });

    test("when destination input has value don't focused on destination input", () => {
      const onChangeOrigin = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            destinationValue={[{ label: "اهواز", id: 3 }]}
            onChangeOrigin={onChangeOrigin}
            originItems={[
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]}
          />
        </ThemeProvider>
      );

      const originInput = screen.getByPlaceholderText("مبدا");
      const destinationInput = screen.getByPlaceholderText("مقصد");
      jest.spyOn(destinationInput, "focus");

      fireEvent.focus(originInput);

      const originItems = screen.getAllByTestId("id-1");
      fireEvent.click(originItems[0]);

      expect(destinationInput.focus).not.toHaveBeenCalled();
    });

    test("when origin input has value don't focused on origin input", () => {
      const onChangeDestination = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangeDestination={onChangeDestination}
            destinationItems={[
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
            ]}
            originValue={[{ label: "مشهد", id: 2 }]}
          />
        </ThemeProvider>
      );

      const originInput = screen.getByPlaceholderText("مبدا");
      const destinationInput = screen.getByPlaceholderText("مقصد");
      jest.spyOn(originInput, "focus");

      fireEvent.focus(destinationInput);

      const destinationItems = screen.getAllByTestId("id-2");
      fireEvent.click(destinationItems[0]);

      expect(originInput.focus).not.toHaveBeenCalled();
    });
  });

  describe("given onChangOriginInput when type in input  should call onChangOriginInput", () => {
    test("should call onChangeOriginInput", () => {
      const onChangOriginInput = jest.fn();
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput onChangOriginInput={onChangOriginInput} />
        </ThemeProvider>
      );
      const originInput = screen.getByPlaceholderText("مبدا");
      userEvent.type(originInput, "Hello,{enter}World!");
      expect(onChangOriginInput).toHaveBeenCalled();
    });

    test("should call onChangDestinationInput", () => {
      const onChangDestinationInput = jest.fn();
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangDestinationInput={onChangDestinationInput}
          />
        </ThemeProvider>
      );
      const destinationInput = screen.getByPlaceholderText("مقصد");
      userEvent.type(destinationInput, "Hello,{enter}World!");
      expect(onChangDestinationInput).toHaveBeenCalled();
    });
  });

  describe("given suggestions", () => {
    test("when focused on origin input, should display suggestions", () => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput suggestions={[{ label: "تبریز", id: 1 }]} />
        </ThemeProvider>
      );
      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);

      const suggestion = screen.getByTitle("suggestion");
      expect(suggestion).toBeInTheDocument();
    });

    test("when origin focused,when click on item, should choose item", () => {
      const onChangeOrigin = jest.fn();
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            suggestions={[{ label: "تبریز", id: 1 }]}
            onChangeOrigin ={onChangeOrigin}
          />
        </ThemeProvider>
      );
      const originInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(originInput);
      const suggestion = screen.getByTitle("suggestions");
      fireEvent.click(suggestion);

      expect(onChangeOrigin).toHaveBeenCalled();
    });

    test("when destination focused, when click on item, should choose item", () => {
      const onChangeDestination = jest.fn();
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            suggestions={[{ label: "تبریز", id: 1 }]}
            onChangeDestination={onChangeDestination}
          />
        </ThemeProvider>
      );
      const destinationInput = screen.getByPlaceholderText("مبدا");
      fireEvent.focus(destinationInput);
      const suggestions = screen.getByTitle("suggestions");
      fireEvent.click(suggestions);

      expect(onChangeDestination).toHaveBeenCalled();
    });
  });

  describe("given routeSuggestions", () => {
    test("when focused on destination input, should display routeSuggestions", () => {
      render(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            routeSuggestions={[{ label: "تهران به مشهد", id: 2 }]}
          />
        </ThemeProvider>
      );
      const destinationInput = screen.getByPlaceholderText("مقصد");
      fireEvent.focus(destinationInput);

      const routeSuggestions = screen.getByTitle("routeSuggestions");
      expect(routeSuggestions).toBeInTheDocument();
    });
  });
});
