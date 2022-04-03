<template>
  <div
    contenteditable="true"
    role="textbox"
    @keydown="onkeydown"
    :placeholder="placeholder"
  ></div>
</template>

<script setup>
const { placeholder } = defineProps({
  placeholder: String,
});

const emit = defineEmits(["enter-press"]);

const onkeydown = (evt) => {
  if (evt.code === "13") {
    emit("enter-press");
  }
};
</script>

<style scoped>
[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
}
</style>
