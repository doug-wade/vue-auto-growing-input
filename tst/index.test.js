import AutoGrowingInput from "../src/AutoGrowingInput.vue";
import { mount } from "@vue/test-utils";

describe("AutoGrowingInput", () => {
  it("renders with required arguments", () => {
    const wrapper = mount(AutoGrowingInput);

    expect(wrapper.find("div[contenteditable]")).toBeTruthy();
  });

  it("emits when enter is pressed", () => {
    const wrapper = mount(AutoGrowingInput);

    const contentEditable = wrapper.find("div[contenteditable]");
    contentEditable.trigger("keydown.enter");

    expect(wrapper.emitted("enter-press")).toBeTruthy();
  });

  it("sets placeholder text", () => {
    const mockPlaceholderText = "placeholder text";
    const wrapper = mount(AutoGrowingInput, {
      propsData: { placeholder: mockPlaceholderText },
    });

    const contentEditable = wrapper.find("div[contenteditable]");

    expect(contentEditable.attributes("placeholder")).toBe(mockPlaceholderText);
  });
});
