/* eslint-disable testing-library/no-render-in-setup */
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme/default";
import OriginDestinationInput from "../OriginDestinationInput";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setup = (props) => {
  render(
    <ThemeProvider theme={theme}>
      <OriginDestinationInput {...props} />
    </ThemeProvider>
  );
};

const focusOnInput = (placeholder = "مبدا") => {
  const input = screen.getByPlaceholderText(placeholder);
  fireEvent.focus(input);
};

describe("OriginDestinationInput", () => {
  const array = [{ useDialog: false }, { useDialog: true }];

  for (let i = 0; i < array.length; i++) {
    const { useDialog } = array[i];
    describe(`given useDialog: ${useDialog}`, () => {
      describe("render no props", () => {
        beforeEach(() => {
          setup({ useDialog });
        });

        it("should render", () => {
          const containerDiv = screen.getByTestId("container");
          expect(containerDiv).toBeInTheDocument();
        });

        it("when focus on origin input, should open popper", () => {
          focusOnInput();
          const paper = screen.getByTestId("paper");
          expect(paper).toBeInTheDocument();
        });

        it("when focus on destination input, should open popper", () => {
          focusOnInput("مقصد");
          const paper = screen.getByTestId("paper");
          expect(paper).toBeInTheDocument();
        });
      });

      describe("given loading", () => {
        beforeEach(() => {
          setup({ loading: true, useDialog });
        });

        it("when focus on input, when loading should display loading", () => {
          focusOnInput();
          const loading = screen.getByTestId("loading");
          expect(loading).toBeInTheDocument();
        });
      });

      describe("given origin items", () => {
        beforeEach(() => {
          render(
            setup({
              originItems: [
                { label: "مشهد", id: 2 },
                { label: "اهواز", id: 3 },
                { label: "رشت", id: 4 },
                { label: "تبریز", id: 5 },
              ],
              useDialog,
            })
          );
        });
        it("given origin items when focus, should display originItems", () => {
          focusOnInput();
          const originItem = screen.getAllByTestId("originItem");
          expect(originItem.length).toBeGreaterThan(0);
        });
      });
      describe("given destination items", () => {
        beforeEach(() => {
          setup({
            destinationItems: [
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
            ],
            useDialog,
          });
        });
        it("when focus, should display destinationItem", () => {
          focusOnInput("مقصد");
          const destinationItem = screen.getAllByTestId("destinationItem");
          expect(destinationItem.length).toBeGreaterThan(0);
        });
      });

      describe("when click on item", () => {
        test("should call onChange prop", () => {
          const onChange = jest.fn();
          setup({
            onChange,
            originItems: [
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ],
            useDialog,
          });

          focusOnInput();
          const originItems = screen.getAllByTestId("originItem");
          fireEvent.click(originItems[0]);
          expect(onChange).toBeCalled();
        });

        if (!useDialog) {
          test("when destination input don't have value should focus on destination input", () => {
            const onChange = jest.fn();

            setup({
              onChange,
              originItems: [
                { label: "مشهد", id: 2 },
                { label: "اهواز", id: 3 },
                { label: "رشت", id: 4 },
                { label: "تبریز", id: 5 },
              ],
              useDialog,
            });

            const destinationInput = screen.getByPlaceholderText("مقصد");
            jest.spyOn(destinationInput, "focus");
            focusOnInput();

            const originItems = screen.getAllByTestId("originItem");
            fireEvent.click(originItems[0]);

            expect(destinationInput.focus).toHaveBeenCalled();
          });

          test("when origin input don't have value, should focus on origin input", () => {
            const onChange = jest.fn();

            setup({
              onChange,
              destinationItems: [
                { label: "رشت", id: 3 },
                { label: "مشهد", id: 3 },
              ],
              useDialog,
            });

            const originInput = screen.getByPlaceholderText("مبدا");
            jest.spyOn(originInput, "focus");

            focusOnInput("مقصد");

            const destinationItems = screen.getAllByTestId("destinationItem");
            fireEvent.click(destinationItems[0]);

            expect(originInput.focus).toHaveBeenCalled();
          });
        }

        test("when destination input has value, don't focused on destination input", () => {
          const onChange = jest.fn();

          setup({
            value: [
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 3 },
            ],
            onChange,
            originItems: [
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ],
            useDialog,
          });

          const destinationInput = screen.getByPlaceholderText("مقصد");
          jest.spyOn(destinationInput, "focus");

          focusOnInput();

          const originItems = screen.getAllByTestId("originItem");
          fireEvent.click(originItems[0]);

          expect(destinationInput.focus).not.toHaveBeenCalled();
        });

        test("when origin input has value, don't focused on origin input", () => {
          const onChange = jest.fn();

          setup({
            onChange,
            destinationItems: [
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
            ],
            value: [{ label: "مشهد", id: 2 }],
            useDialog,
          });

          const originInput = screen.getByPlaceholderText("مبدا");
          jest.spyOn(originInput, "focus");

          focusOnInput("مقصد");

          const destinationItems = screen.getAllByTestId("destinationItem");
          fireEvent.click(destinationItems[0]);

          expect(originInput.focus).not.toHaveBeenCalled();
        });
      });

      describe("given onChangOriginInput when type in input,  should call onChangOriginInput", () => {
        test("should call onChangeOriginInput", () => {
          const onChangOriginInput = jest.fn();
          setup({ onChangOriginInput, useDialog });

          const originInput = screen.getByPlaceholderText("مبدا");
          userEvent.type(originInput, "Hello,{enter}World!");
          expect(onChangOriginInput).toHaveBeenCalled();
        });

        test("should call onChangDestinationInput", () => {
          const onChangDestinationInput = jest.fn();

          setup({
            onChangDestinationInput,
            useDialog,
          });

          const destinationInput = screen.getByPlaceholderText("مقصد");
          userEvent.type(destinationInput, "Hello,{enter}World!");
          expect(onChangDestinationInput).toHaveBeenCalled();
        });
      });

      describe("given suggestions", () => {
        test("when focused on origin input, should display suggestions", () => {
          setup({ suggestions: [{ label: "تبریز", id: 1 }], useDialog });
          focusOnInput();

          const suggestion = screen.getByTestId("suggestions");
          expect(suggestion).toBeInTheDocument();
        });

        test("when origin focused,when click on item, should choose item", () => {
          const onChange = jest.fn();
          setup({
            suggestions: [{ label: "تبریز", id: 1 }],
            onChange,
            useDialog,
          });

          focusOnInput();

          const suggestion = screen.getByTestId("suggestions");
          fireEvent.click(suggestion);

          expect(onChange).toHaveBeenCalled();
        });

        test("when destination focused, when click on item, should choose item", () => {
          const onChange = jest.fn();
          setup({
            suggestions: [{ label: "تبریز", id: 1 }],
            onChange,
            useDialog,
          });

          focusOnInput("مقصد");

          const suggestions = screen.getByTestId("suggestions");
          fireEvent.click(suggestions);

          expect(onChange).toHaveBeenCalled();
        });
      });

      describe("given routeSuggestions", () => {
        test("when focused on destination input, should display routeSuggestions", () => {
          setup({
            routeSuggestions: [
              {
                origin: { label: "تهران", id: 1 },
                destination: { label: "تبریز", id: 1 },
              },
            ],
            useDialog,
          });

          focusOnInput("مقصد");

          const routeSuggestions = screen.getByTestId("routeSuggestions");
          expect(routeSuggestions).toBeInTheDocument();
        });

        test("when click on routeSuggestions", () => {
          const onChange = jest.fn();
          const routeSuggestions = [
            {
              origin: { label: "تهران", id: 1 },
              destination: { label: "تبریز", id: 1 },
            },
          ];
          setup({
            routeSuggestions: routeSuggestions,
            useDialog,
            onChange,
          });

          const originInput = screen.getByPlaceholderText("مبدا");
          const destinationInput = screen.getByPlaceholderText("مقصد");

          fireEvent.focus(originInput);
          const routeSuggestionsButton = screen.getByTestId(
            "routeSuggestionsButton"
          );
          fireEvent.click(routeSuggestionsButton);

          expect(originInput).toHaveValue(routeSuggestions[0].origin.label);
          expect(destinationInput).toHaveValue(
            routeSuggestions[0].destination.label
          );
          expect(onChange).toBeCalledWith([
            routeSuggestions[0].origin,
            routeSuggestions[0].destination,
          ]);
        });
      });

      describe("when click on swap button", () => {
        test("should swap inputs", () => {
          const onChange = jest.fn();
          const value = [
            { label: "تبریز", id: 1 },
            { label: "مشهد", id: 2 },
          ];

          setup({
            value,
            onChange,
          });
          const swapButton = screen.getByTestId("swapButton");
          fireEvent.click(swapButton);

          const originInput = screen.getByPlaceholderText("مبدا");
          const destinationInput = screen.getByPlaceholderText("مقصد");

          expect(onChange).toBeCalledWith([value[1], value[0]]);

          expect(originInput).toHaveValue(value[1].label);
          expect(destinationInput).toHaveValue(value[0].label);
        });
      });
    });
  }
});
