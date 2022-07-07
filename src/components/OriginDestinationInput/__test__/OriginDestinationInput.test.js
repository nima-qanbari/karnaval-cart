import { ThemeProvider } from "@material-ui/core";

import { theme } from "../../../theme/default";
import { mount } from "enzyme";

import OriginDestinationInput from "../OriginDestinationInput";

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

describe("OriginDestinationInput", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <OriginDestinationInput />
      </ThemeProvider>
    );
  });

  test("should render", () => {
    const OriginDestinationInputComponent = wrapper.find(
      "[data-test='container']"
    );
    expect(OriginDestinationInputComponent.length).toBe(1);
  });

  test("when focus on origin input, should open popper", async () => {
    const originInput = wrapper.find("[data-test='originInput']");
    originInput.simulate("focus");

    await sleep(100);
    expect(wrapper.find("[data-test='paper']").length).toBeGreaterThan(1);
  });

  test("when focus on destination input, should open popper", async () => {
    const destinationInput = wrapper.find("[data-test='destinationInput']");
    destinationInput.simulate("focus");
    await sleep(100);
    expect(wrapper.find("[data-test='paper']").length).toBeGreaterThan(1);
  });

  test("when focus on input, when loading should display loading", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OriginDestinationInput loading={true} />
      </ThemeProvider>
    );
    const originInput = wrapper.find("[data-test='originInput']");
    originInput.simulate("focus");
    expect(wrapper.find("[data-test='loading']").length).toBe(1);
  });

  test("given origin items when focus, should display originItems", async () => {
    const wrapper = mount(
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
    const originItems = wrapper.find("[data-test='originInput']");
    originItems.simulate("focus");
    await sleep(100);
    expect(wrapper.find("[data-test='originItems']").length).toBeGreaterThan(0);
  });

  test("given destination items when focus, should display destinationItems", async () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OriginDestinationInput
          destinationItems={[
            { label: "اهواز", id: 3 },
            { label: "مشهد", id: 2 },
          ]}
        />
      </ThemeProvider>
    );
    const destinationItems = wrapper.find("[data-test='destinationInput']");
    destinationItems.simulate("focus");
    await sleep(100);

    expect(
      wrapper.find("[data-test='destinationItems']").length
    ).toBeGreaterThan(0);
  });

  describe("when click on item", () => {
    test("should call onChange prop", async () => {
      const obj = {
        onChangeOrigin: () => {},
      };

      jest.spyOn(obj, "onChangeOrigin");

      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <OriginDestinationInput
            onChangeOrigin={obj.onChangeOrigin}
            originItems={[
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]}
          />
        </ThemeProvider>
      );
      const originInput = wrapper.find("[data-test='originInput']");
      originInput.simulate("focus");
      await sleep(10);

      const originItems = wrapper.find("[data-test='originItems']");
      originItems.at(0).simulate("click");
      await sleep(10);

      expect(obj.onChangeOrigin).toBeCalled();
    });

    // test("when don't have value should focus on another input", async () => {
    //   const obj = {
    //     onChangeOrigin: () => {},
    //   };

    //   jest.spyOn(obj, "onChangeOrigin");

    //   const wrapper = mount(
    //     <ThemeProvider theme={theme}>
    //       <OriginDestinationInput
    //         onChangeOrigin={obj.onChangeOrigin}
    //         originItems={[
    //           { label: "مشهد", id: 2 },
    //           { label: "اهواز", id: 3 },
    //           { label: "رشت", id: 4 },
    //           { label: "تبریز", id: 5 },
    //         ]}
    //       />
    //     </ThemeProvider>
    //   );
    //   const destinationInput = wrapper.find("[data-test='destinationInput']");
    //   const originInput = wrapper.find("[data-test='originInput']");
    //   originInput.simulate("focus");
    //   await sleep(10);

    //   const originItems = wrapper.find("[data-test='originItems']");
    //   originItems.at(0).simulate("click");
    //   await sleep(10);
    //   console.log(
    //     document.activeElement,
    //     destinationInput.getElement(),
    //     document.activeElement
    //   );
    //   expect(destinationInput.focus).toHaveBeenCalled();
    // });
  });
});
