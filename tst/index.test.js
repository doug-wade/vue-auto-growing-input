import AutoGrowingInput from "../src/AutoGrowingInput.vue";
import { mount } from "@vue/test-utils";

describe("AutoGrowingInput", () => {
  it("renders with required arguments", () => {
    const wrapper = mount(AutoGrowingInput);

    expect(wrapper.text()).toBe("Hello World!");
  });
});
