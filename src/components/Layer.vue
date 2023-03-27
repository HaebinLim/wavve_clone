<template>
  <div
    class="layer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_cont"
  >
    <div id="dialog_label"></div>
    <div id="dialog_cont"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/layer";
</style>
