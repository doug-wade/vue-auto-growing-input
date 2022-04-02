<template>
  <div contenteditable="true" role="textbox" @keydown="onkeydown"></div>
</template>

<script setup>
const emit = defineEmits(["enter-press"]);

const onkeydown = (evt) => {
  if (evt.code === "13") {
    emit("enter-press");
  }
};
</script>
