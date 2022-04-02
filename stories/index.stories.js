import AutoGrowingInput from "../src/AutoGrowingInput.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/AutoGrowingInput",
  component: AutoGrowingInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AutoGrowingInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<auto-growing-input v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "AutoGrowingInput",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "AutoGrowingInput",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "AutoGrowingInput",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "AutoGrowingInput",
};
