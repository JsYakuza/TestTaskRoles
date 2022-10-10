
<template>
  <button class="custom_btn" :class="className" :type="type" @click="buttonClickHandler">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "CustomButton",
  props: {
    className: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    buttonClickHandler() {
      this.$emit("clickOnButton");
    },
  },
};
</script>

<style scoped>
.custom_btn {
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
</style>